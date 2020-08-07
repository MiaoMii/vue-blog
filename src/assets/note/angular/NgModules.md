#### NgModules
> NgModules 用于配置注入器和编译器，并帮你把那些相关的东西组织在一起。

+ `declarations` 该应用拥有的组件
+ `providers `   列出该应用所需要的服务
+ `bootstrap `  根组件，angular创建并将其插入宿主index.html

|  NgModules   | 导入自  | 为何使用 |
|  ----  | ----  | ---- |
| BrowserModule | @angular/platform-browser | 浏览器中运行时 |
| CommonModule  | @angular/common | 使用NgIf和NgFor时 |
| FormsModule  | @angular/forms | 当要构建模板驱动表单时（它包含 NgModel ） |
| ReactiveFormsModule  | @angular/forms |  当要构建响应式表单时 |
| RouterModule  | @angular/router |  当要使用路由功能时，RootLink，forRoot(),forChild() |
| HttpClientModule  | @angular/common/http |  当要请求时 |

#### 入口组件
> Angular会在应道过程中把它加载到DOM中。
Angular会动态加载根组件AppComponent，是因为它的类型作为参数传给了@NgModule.bootstrap

#### 特性模块
> 用来对代码进行组织的模块
`ng generate module Custo
merDashboard
`
