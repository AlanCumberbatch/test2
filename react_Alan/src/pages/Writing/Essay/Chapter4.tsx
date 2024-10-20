
// import React from 'react';
import TextWithLineBreaks from '@/components/FunctionComponent/TextWithLineBreaks'

const rawText = `关于让座
地铁上，抬头看见两位老人

看着慈眉善目

然后想：“要不要让一下座位？”

看了一眼地铁线路，“还有3站，其实可以，毕竟也算是积德了”

“但是，什么尊老爱幼，都只不过是坑骗人的观念罢了”

“还有一站”，我看了几眼奶奶，然后起身

然后座位被另外一个人座了🤣🤣🤣😂😂😂

想来也是好笑。

这一刻，我竟背负了他人。`;

const Chapter4 = () => {
  return <TextWithLineBreaks rawText={rawText} />
};

export default Chapter4;
