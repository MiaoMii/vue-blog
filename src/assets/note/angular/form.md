### 响应式表单
> 响应式表单使用显式的、不可变的方式，管理表单在特定的时间点上的状态。
#### 使用表单控件
1. 注册响应式表单
2. 生成一个新的 `FormControl` 实例，并把它保存在组件中。
3. 在模板中注册这个 `FormControl`。

使用`setValue()`方法来替换表单的值

#### 把表单控件分组
+ 表单组 定义了一个带有一组控件的表单
+ 表单数组 定义一个可在运行时添加删除的动态表单

1. 创建一个 `FormGroup` 实例
2. 将`FormGroup`关联到视图
3. 保存表单数据

#### `FormBuilder`
`FormBuilder`服务来便捷的生成表单

1. 导入`FormBuilder`服务
2. 注入`FormBuilder`服务
3. 生成表单内容

三个工厂方法
+ control() 对应  FormControl
+ group()  对应   FormGroup
+ array()  对应   FormArray

#### 表单验证 Validators
1. 导入 验证器函数 Validators
2. 添加到表单中相对应的字段
3. 添加逻辑来处理验证

#### 创建动态表单 FormArray
