// import transaction from "../../model/user/transactionModel.js";

// export const getDashboardDetails = async (req, res) => {
//   try {
//     // total transactions
//     const startDate = new Date();
//     startDate?.setDate(startDate?.getDate() - 7);
//     startDate?.setHours(0, 0, 0, 0);

//     const endDate = new Date();
//     endDate?.setDate(endDate?.getDate());
//     endDate?.setHours(23, 59, 59, 999);
//     const TotalTransaction = await transaction?.find({
//       createdAt: { $gte: startDate, $lte: endDate },
//     });
//     let Total = 0;
//     for (let index = 0; index < TotalTransaction?.length; index++) {
//       Total += TotalTransaction[index]?.amount;
//     }

//     // last 6 month transaction
//     const results = [];

//     for (let index = 0; index < 6; index++) {
//       const startDate = new Date();
//       startDate.setDate(startDate.getDate() - index);
//       startDate.setHours(0, 0, 0, 0);

//       const endDate = new Date();
//       endDate.setDate(endDate.getDate() - index);
//       endDate.setHours(23, 59, 59, 999);

//       const lastSixTransaction = await transaction.find({
//         createdAt: { $gte: startDate, $lte: endDate },
//       });

//       const totalAmount = lastSixTransaction.reduce(
//         (sum, transaction) => sum + (transaction.amount || 0),
//         0
//       );
//       const displayDate = new Date(startDate);
//       displayDate.setDate(displayDate.getDate() + 1);

//       results.push({
//         date: new Intl.DateTimeFormat("en", { month: "short" }).format(
//           displayDate
//         ),
//         totalAmount,
//       });
//     }

//     // lastest transaction
//     const latestTransaction = await transaction
//       .find()
//       .sort({ _id: -1 })
//       .limit(1);

//     // total sales
//     const collections = await transaction.find({});
//     let numberOfCollections = 0;
//     for (let index = 0; index < collections.length; index++) {
//       numberOfCollections += collections[index].cart.length;
//     }

//     // barGraph Data
//     const barGraphData = await transaction.find({});
//     const counter = {};
//     let bar;
//     let newArray = [];
//     let graph;
//     for (let index = 0; index < barGraphData.length; index++) {
//       graph = barGraphData[index].cart;
//       for (let index = 0; index < graph.length; index++) {
//         bar = graph[index]?.name;
//         newArray.push(bar);
//       }
//     }
//     newArray.forEach((ele) => {
//       if (counter[ele]) {
//         counter[ele] += 1;
//       } else {
//         counter[ele] = 1;
//       }
//     });
//     const graphData = Object.keys(counter).map((key) => {
//       return {
//         name: key.split(" ")[0],
//         Products: counter[key],
//       };
//     });

//     // Pie Chart Data

//     const final = [];
//     let piechart = [];

//     for (let index = 0; index < 24; index++) {
//       const startDate = new Date();
//       startDate.setDate(startDate.getDate() - index);
//       startDate.setHours(0, 0, 0, 0);

//       const endDate = new Date();
//       endDate.setDate(endDate.getDate() - index);
//       endDate.setHours(23, 59, 59, 999);

//       const lastSixTransaction = await transaction.find({
//         createdAt: { $gte: startDate, $lte: endDate },
//       });

//       const totalAmount = lastSixTransaction.reduce(
//         (sum, transaction) => sum + (transaction.amount || 0),
//         0
//       );
//       const displayDate = new Date(startDate);
//       displayDate.setDate(displayDate.getDate() + 1);

//       final.push({
//         date: new Intl.DateTimeFormat("en", { month: "short" }).format(
//           displayDate
//         ),
//         totalAmount,
//       });
//     }

//     const start = 0;
//     const step = 4;
//     const end = final.length;

//     for (let i = start; i < end; i += step) {
//       let data = final.slice(i, i + step);

//       let total = 0;

//       for (let i = 0; i < data.length; i++) {
//         total += data[i].totalAmount;
//       }
//       let finalAmount = {value: total}
//       piechart.push(finalAmount);
//     }

//     res.send({
//       sixMonth: results,
//       lastTransaction: latestTransaction[0]?.amount,
//       totalsale: numberOfCollections,
//       totalPayment: Total,
//       bargraph: graphData,
//       piechart:piechart,
//     });
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// };

import transaction from "../../model/user/transactionModel.js";

export const getDashboardDetails = async (req, res) => {
  try {
    // Helper function to calculate total transaction amount
    const calculateTotalAmount = (transactions) =>
      transactions.reduce((sum, txn) => sum + (txn.amount || 0), 0);

    // Get total transactions for the last 7 days
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    const totalTransactions = await transaction.find({
      createdAt: { $gte: startDate, $lte: endDate },
    });

    const totalPayment = calculateTotalAmount(totalTransactions);

    // Last 6 months transaction data
    const sixMonthTransactions = [];
    for (let i = 0; i < 6; i++) {
      const monthStart = new Date();
      monthStart.setMonth(monthStart.getMonth() - i, 1);
      monthStart.setHours(0, 0, 0, 0);

      const monthEnd = new Date();
      monthEnd.setMonth(monthEnd.getMonth() - i + 1, 0);
      monthEnd.setHours(23, 59, 59, 999);

      const monthlyTransactions = await transaction.find({
        createdAt: { $gte: monthStart, $lte: monthEnd },
      });

      sixMonthTransactions.push({
        date: new Intl.DateTimeFormat("en", { month: "short"}).format(monthStart),
        totalAmount: calculateTotalAmount(monthlyTransactions),
      });
    }

    // Get latest transaction
    const latestTransaction = await transaction
      .find()
      .sort({ _id: -1 })
      .limit(1);

    // Total sales: Sum of cart lengths from all transactions
    const allTransactions = await transaction.find({});
    const totalSales = allTransactions.reduce(
      (sum, txn) => sum + txn.cart.length,
      0
    );

    // Bar Graph Data: Count occurrences of product names
    const productCount = {};
    allTransactions.forEach((txn) =>
      txn.cart.forEach(({ name }) => {
        const productName = name.split(" ")[0];
        productCount[productName] = (productCount[productName] || 0) + 1;
      })
    );
    const barGraphData = Object.entries(productCount).map(([name, count]) => ({
      name,
      Products: count,
    }));

    // Pie Chart Data: Group total transaction amounts by 4-day periods over the last 24 days
    const pieChartData = [];
    for (let i = 0; i < 24; i += 4) {
      let totalAmount = 0;
      for (let j = 0; j < 4; j++) {
        const dayStart = new Date();
        dayStart.setDate(dayStart.getDate() - i - j);
        dayStart.setHours(0, 0, 0, 0);

        const dayEnd = new Date(dayStart);
        dayEnd.setHours(23, 59, 59, 999);

        const dailyTransactions = await transaction.find({
          createdAt: { $gte: dayStart, $lte: dayEnd },
        });

        totalAmount += calculateTotalAmount(dailyTransactions);
      }
      pieChartData.push({ value: totalAmount });
    }

    // Send the dashboard data
    res.send({
      sixMonth: sixMonthTransactions,
      lastTransaction: latestTransaction[0]?.amount,
      totalSales,
      totalPayment,
      barGraph: barGraphData,
      pieChart: pieChartData,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};
