
//冒泡排序

// function bubbleSort(arr){
//     var len = arr.length;
//     for(var i = 0;i < len;i++){
//         for(var j = 0;j < len-1-i;j++){  
//             if(arr[j] > arr[j + 1]){   //相邻元素两两对比
//                 var temp = arr[j + 1];  //交互位置,故大的都放到了最后面
//                 arr[j + 1] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }
// var arr = [9,5,1,3,7,10,9,100,56,4,0,1,1,3];
// console.log(bubbleSort(arr));

//插入排序

// function insertSort(arr){
//     // 从第二个元素开始，留出一个空位置
//     for(var i = 1;i < arr.length;i++){
//         var x = arr[i]; 
//         for(var j = i - 1;arr[j] > x;j--){  //后挪空出位置 .
//             arr[j + 1] = arr[j];
//         }
//         if(arr[j + 1] != x){
//             arr[j + 1] = x;
//         }
//     }
//     return arr;
// }
// var arr = [9,5,1,3,7,10,9,100,56,4,0,1,1,3];
// console.log(insertSort(arr));

//希尔排序（递减增量排序算法）

// function shellSort(arr){
//     var shell = Math.floor(arr.length / 2);
//     while(shell > 0){
//         for(var i = shell;i < arr.length;i++){
//             temp = arr[i];
//             for(var j = i;j >= shell && arr[j - shell] > temp;j -= shell){
//                 arr[j] = arr[j - shell];
//             }
//             arr[j] = temp;
//         }
//         shell = Math.floor(shell / 2);
//     }
//     return arr;
// }
// var arr = [9,5,1,3,7,10,9,100,56,4,0,1,1,3];
// console.log(shellSort(arr));

//归并排序

/* 排序并合并*/
// function merge(left, right) {
//    var re = [];
//    while(left.length > 0 && right.length > 0) {
//        if(left[0] < right[0]) {
// 　　　　　　// 如果左边的数据小于右边的数据，将左边的数据取出，放到新数组那里
//            re.push(left.shift());
//        } else {
//            re.push(right.shift()); //shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
//        }
//    }
//    /* 当左右数组长度不等.将比较完后剩下的数组项连接起来即可 */
//    return re.concat(left).concat(right);
// }
 
// function mergeSort(arr) {
//    if(arr.length == 1){
//       return arr;
//    }
//    /* 首先将无序数组划分为两个数组 */
//    var mid = Math.floor(arr.length / 2); //Math.floor() 方法执行的是向下取整计算，它返回的是小于或等于函数参数，并且与之最接近的整数。
//    var left = arr.slice(0, mid); //slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
//    var right = arr.slice(mid);
//    /* 递归分别对左右两部分数组进行排序合并 */
//    return merge(mergeSort(left), mergeSort(right));
// }

// var arr = [9,5,1,3,7,10,9,100,56,4,0,1,1,3,6];
// console.log(mergeSort(arr));

//快速排序

// function quickSort(arr){
//         //如果数组<=1,则直接返回
//     if(arr.length <= 1){
//         return arr;
//     }
//     var pivotIndex = Math.floor(arr.length / 2);
//     //找基准，并把基准从原数组删除
//     var pivot = arr.splice(pivotIndex,1)[0];
//     //定义左右数组
//     var left = [];
//     var right = [];

//     //比基准小的放在left，比基准大的放在right
//     for(var i = 0;i < arr.length;i++){
//         if(arr[i] <= pivot){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     //递归
//     return quickSort(left).concat([pivot],quickSort(right));
// }
//     var arr = [9,5,1,3,7,10,9,100,56,4,0,1,1,3,6];
//     console.log(quickSort(arr));

//选择排序

//在无序区中选出最小的元素，然后将它和无序区的第一个元素交换位置。
// function selectSort(arr){
//    length = arr.length;
//    for (var i = 0; i < length; i++){   // 循环数组
//         var arr_i = arr[i];       // 把每一次的 数组里面的数字记录下来
//         var k = i;                  // 记录下来索引
//         for (var j = i + 1; j < length; j++){   // 当前的数字与后一个数字相比较
//            if (arr_i > arr[j]){   //当前的数 大于 后面一个数的话
//                arr_i = arr[j];    //  就讲后面 的数值 保存下来
//                k = j;             /// 保存索引
//            }
//        }
//        arr[k] = arr[i];   // 进行交换位置
//        arr[i] = arr_i;
//    }
//    return arr;
// }
   
// var arr=[9,5,1,3,7,10,9,100,56,4,0,1,1,3,6];
// console.log(selectSort(arr));

//奇偶排序

// function oddEvenSort(arr){
//     //swaped用来控制循环是否要继续，如果左边的都比右边的小，则退出循环，返回排好的数组
//     var swaped = true;  
//     var k = 0;
//     while(swaped){
//         if(k > 0){
//             swaped = false;  
//         }
//         for(var i = k;i < arr.length - 1;i += 2){
//             if(arr[i] > arr[i + 1]){
//                 // 如果左边的数字比右边的大，两者交换位置
//                 arr[i] = [ arr[i + 1], arr[i + 1] = arr[i] ][0];  
//                 swaped = true;
//             }

//         }
//         k = [1,0][k]; //奇数和偶数之间的转行
//     }
//     return arr;
// }   
// var arr = [9,5,1,3,7,10,9,100,56,4,0,1,1,3,6];
// console.log(oddEvenSort(arr));