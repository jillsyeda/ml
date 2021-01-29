const tf = require('@tensorflow/tfjs-node-gpu');

/*
 Tensors[张量]
 Tensors are the core data structure of TensorFlow.js, They are a generalization[归纳,概括]
 of vectors[向量] and matrices to potentially[潜在,可能] higher dimensions[维度].

 Tensors Creation
 We have utility functions for common cases like Scalar,1D,2D,3D and 4D tensors,as well a number
 of functions to initialize tensors in ways useful for machine learning.

 tf.tensor (values, shape?, dtype?) function
 Creates a tf.Tensor with the provided values,shape and dtype.
 Parameters:
 values(Array) The values of the tensor. Can be nested array of numbers, or a flat array,
 or a TypedArray. If the values are strings, they will be encoded as utfj-8 and kept as
 Uint8Array[].

 shape(number[]) The shape of the tensor.Optional.If not provided,it is inferred from values.
 dtype('float32'|'int32'|'bool'|'complex64'|'string') The data type.

 */

// 定义一个随机数
tf.randomUniform([]).print();
// 定义有2个元素的零向量
tf.zeros([2]).print();
// 定义两个2x2的常量矩阵
let a = tf.tensor([[1, 2], [3, 4]]);
console.log(a.shape);
console.log(a.dtype);
a.array().then((data) => {
    console.log(data);
});
let b = tf.tensor([[5, 6], [7, 8]]);

