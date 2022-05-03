## DOM操作
> DOM: document object model 文档对象模型
> 页面中的元素
### 获取DOM元素的方法
- document.getElementById()
- [context].getElementsByTagName() 在指定上下文的容器中，通过标签名获取一组元素集合
- [context].getElementsByClassName() 在指定上下文的容器中，通过类名获取一组元素集合(不兼容IE6-8)
- document.getElementsByName() 在整个文档中，通过标签的name属性获取一组元素集合(IE中只有表单元素的name才能识别，一般只应用于表单元素的处理)
document.head/document.body/document.documentElement获取页面中的head/body/html三个元素
- [context].querySelector([selector]) 在指定上下文的容器中,通过选择器获取指定的元素对象(不兼容IE6-8)
- [context].querySelectorAll([selector]) 在指定上下文的容器中,通过选择器获取指定的元素对象集合(不兼容IE6-8)
### DOM节点
> 节点Node页面中出现的所有内容都是节点
> 节点集合：NodeList
- 元素节点
  + nodeType: 节点类型1
  + nodeName: 大写的标签名
  + nodeValue: null
- 文本节点
  + nodeType: 节点类型3
  + nodeName: "#text"
  + nodeValue: 文本内容
- 注释节点
  + nodeType: 节点类型8
  + nodeName: "#commen"
  + nodeValue: 注释内容
- 文档节点document
  + nodeType: 节点类型9
  + nodeName: "#document"
  + nodeValue: null
- 其他
### 节点之间关系的属性
- childNodes: 获取所有的子节点
- children: 获取所有的元素子节点（子元素标签）
- firstChild: 获取第一个子节点
- lastChild: 获取最后一个子节点
- firstElementChild: 获取第一个元素子节点(不兼容IE6-8)
- lastElementChild: 获取最后一个元素子节点(不兼容IE6-8)
- previousSibling: 获取上一个兄弟节点
- nextSibling: 获取下一个兄弟节点
- previousElementSibling: 获取上一个兄弟元素节点(不兼容IE6-8)
- nextElementSibling: 获取下一个兄弟元素节点(不兼容IE6-8)
### js中动态增删改元素
- `createElement创建元素对象`
- `createTextNode创建文本对象`
- `appendChild把元素添加到指定容器未尾`
- `insertBefore把元素添加到指定容器中指定元素的前面`
- `cloneNode(true/false)克隆元素或节点true时为深克隆`
- `removeChild()把元素从指定容器中移除`
### 自定义属性
- setAttribute('data-attr', attr) //此方法会把属性写到标签上面
- getAttribute('data-attr')
- removeAttribute('data-attr') // 移除属性