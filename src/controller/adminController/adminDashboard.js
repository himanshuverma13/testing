import transaction from "../../model/user/transactionModel.js";

export const getDashboardDetails = async (req, res) => {
  try {
    // total transactions
    const startDate = new Date();
    startDate?.setDate(startDate?.getDate() - 7);
    startDate?.setHours(0, 0, 0, 0);

    const endDate = new Date();
    endDate?.setDate(endDate?.getDate());
    endDate?.setHours(23, 59, 59, 999);
    const TotalTransaction = await transaction?.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });
    let Total = 0;
    for (let index = 0; index < TotalTransaction?.length; index++) {
      Total += TotalTransaction[index]?.amount;
    }

    // last 6 month transaction
    const results = [];

    for (let index = 0; index < 6; index++) {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - index);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date();
      endDate.setDate(endDate.getDate() - index);
      endDate.setHours(23, 59, 59, 999);

      const lastSixTransaction = await transaction.find({
        createdAt: { $gte: startDate, $lte: endDate },
      });

      const totalAmount = lastSixTransaction.reduce(
        (sum, transaction) => sum + (transaction.amount || 0),
        0
      );
      const displayDate = new Date(startDate);
      displayDate.setDate(displayDate.getDate() + 1);

      results.push({
        date: new Intl.DateTimeFormat('en', { month: 'short' }).format(displayDate),
        totalAmount,
      });
    }

    // lastest transaction
    const latestTransaction = await transaction
    .find()
    .sort({ _id: -1 })
    .limit(1);


    // total sales
    const collections = await transaction.find({});
    let numberOfCollections = 0;
    for (let index = 0; index < collections.length; index++) {
      numberOfCollections += collections[index].cart.length;
    }
    // console.log('numberOfCollections: ', numberOfCollections);

    // barGraph Data
    const barGraphData = await transaction.find({});
    const counter = {};
    let bar;
    let newArray = [];
    let graph;
    for (let index = 0; index < barGraphData.length; index++) {
      graph = barGraphData[index].cart;
      for (let index = 0; index < graph.length; index++) {
        bar = graph[index]?.name;
        newArray.push(bar);
      }
    }
    newArray.forEach((ele) => {
      if (counter[ele]) {
        counter[ele] += 1;
      } else {
        counter[ele] = 1;
      }
    });
    const graphData = Object.keys(counter).map((key) => {
      return {
        name: key.split(" ")[0],
        Products:counter[key],
      };
    });
    
    console.log(graphData);

    res.send({
      sixMonth:results,
      lastTransaction:latestTransaction[0]?.amount,
      totalsale:numberOfCollections,
      totalPayment:Total,
        bargraph:graphData,
        // piechart:piechart,

    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
