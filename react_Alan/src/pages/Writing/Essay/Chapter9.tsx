
// import React from 'react';
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

const rawText = `穿裤子的困扰
穿秋裤吧，会热，在工位热一天。不喜欢出汗的感觉，那种秋裤裹在腿上的感觉真的很不方便，整个人都不清爽了。

不穿，会冷，会在上下班骑电动车冷，会坐地铁屁股凉，会中午出去吃饭凉。

我被裤子困住了🥲。。。

额，如果穿个厚裤子的话，根据昨天的情况，在工位应该会热，这个过。

那既如此，就还是穿这个单裤，然后电动车搞一个挡风，刚好也到季节了，坐地铁给自己弄个坐垫儿，就可以了。（是的，有座还是要做坐的。）

反手就打开了拼夕夕，搜坐垫儿，浏览了里面商品的样式和做工，发现完全可以自己用缝纫机缝一个简易的啊，刚好家里有类似材质的布；搜电动车挡风，对比之后看第一个就不错，买了～

妥活。现在屁股凉着呢，但今天确实也就只能这么着了。

到工位之后，还是因为着凉而肚子痛，去厕所蹲坑了…..`;

const Chapter9 = () => {
  return <TextWithLineBreaks rawText={rawText} />
};

export default Chapter9;
