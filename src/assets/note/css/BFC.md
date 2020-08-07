#### BFC
> 块级格式上下文，是web页面中盒模型布局的css的渲染模式，指一个独立的渲染区域

下列情况可以生成一个BFC

+ 根元素，即HTML
+ `float`不为`none`的元素
+ `overflow`的值不为`visible`
+ `display`的值为`inline-blok`、`table-cell`、`table-caption`
+ `position`的值为`absolute`、`flexd`

#### BFC布局规则
+ 内部的box会在垂直方向一个接一个的放置
+ 垂直方向的距离是由`margin`决定的, 属于一个BFC内的box会发生`magin`重叠
+ `BFC`区域不会与`float`的元素区域重叠
+ 计算`BFC`的高度时，`float`元素也会被计算
+ `BFC`是一个独立的容器，容器的子元素不会影响到外面元素

#### flex
flex 1 对应
```css
    {
        flex-grow: 1;
        flex-basis: 0;
        flex-shrink: 1;
    }
```
+ `flex-grow`: 设置元素的扩展比例 例：父元素宽度500px 有A、B、C三个子元素`flex-grow`分别为1，2，2，即他们的宽比为1：2：2，即100px，200px，200px
+ `flex-shrink` 设置元素的收缩比例。假如父级元素总宽度为500px,现在有A, B, C, D, E五个子元素，他们的flex-shrink分别为1, 1, 1, 2, 2,他们的flex-basis都是120px。计算可知，五个子元素总宽度为120 * 5 = 600px，超出了父级100px，所以需要对子元素进行收缩。收缩的时候就要通过flex-shrink来计算，我们发现他们flex-shrink的总和为1 + 1 + 1 + 2 + 2 = 7。所以将超出的100px分成7份，每份约14px，然后按照flex-shrink进行收缩。A, B ,C的份数都是1，所以他们收缩14px，他们的最终宽度是120 - 14 = 106px；D, E的份数是2，所以他们应该收缩14 * 2 = 28px，最终宽度是120 - 28 = 92px。
+ `flex-basis` 元素的初始值 扩展收缩都以此为基础假如父级元素总宽度为500px,现在有A, B, C, D, E五个子元素，他们的flex-shrink分别为1, 1, 1, 2, 2,他们的flex-basis都是120px。计算可知，五个子元素总宽度为120 * 5 = 600px，超出了父级100px，所以需要对子元素进行收缩。收缩的时候就要通过flex-shrink来计算，我们发现他们flex-shrink的总和为1 + 1 + 1 + 2 + 2 = 7。所以将超出的100px分成7份，每份约14px，然后按照flex-shrink进行收缩。A, B ,C的份数都是1，所以他们收缩14px，他们的最终宽度是120 - 14 = 106px；D, E的份数是2，所以他们应该收缩14 * 2 = 28px，最终宽度是120 - 28 = 92px。

