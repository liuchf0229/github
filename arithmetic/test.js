// 编程题: 由 'K' (人) 和 'O'（空地）组成的的2D数据，请计算人群的数量。 在空地里，人群是通过水平方向或垂直方向上相邻的人连接形成。

// 示例 1:

// 输入:
// OKKKO
// OKKKO
// OKKKO
// OKKOO

// 输出: 1

// 示例 2:

// 输入:
// KKOOO
// KOOOO
// OKOKO
// KOOOO

// 输出: 4

const arr=[['O','k','k','k','O'],['O','k','k','k','O'],['O','k','O','k','O'],['O','k','k','O','O']]
// const arr=[['k','k','O','O','O'],['K','O','O','O','O'],['O','k','O','k','O'],['K','O','O','O','O']]
// const arr=[['k','k','O','O','O'],['K','O','O','O','O'],['k','k','O','k','O'],['K','O','k','O','O']]
const isLandNum = (gird)=>{
    let num = 1;
    for(var i = 0;i<gird.length;i++) {
        var parents = gird[i]
        for(var j=0;j<parents.length;j++){
            if(parents[j] === 'k') {
                var curArr = []
                if(i=== 0) {
                    curArr = [parents[j+1] , gird[i+1][j] ]
                }else if(i === 3) {
                    curArr = [parents[j-1], gird[i-1][j]]
                }else {
                    curArr = [parents[j-1],parents[j+1], gird[i-1][j], gird[i+1][j]]
                }
                var bool = curArr.includes('k')
                if(!bool) {
                    num +=1
                }
            }
        }
    }
    return num
}
console.log(isLandNum(arr))