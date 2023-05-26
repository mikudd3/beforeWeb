// 数字枚举
enum LogisticsStatus {
    ToBeCollected = 1, // 待揽收
    Collected, // 已揽收
    InTransit, // 运输中
    InDistribution, // 配送中
    Received, // 已签收
}
console.log(LogisticsStatus.ToBeCollected);