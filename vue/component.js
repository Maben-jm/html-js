//组件案例
Vue.component('todo-item1', {
    template: '<li>这是个待办项</li>'
});

//升级
Vue.component('todo-item2', {
    // todo-item 组件现在接受一个
    // "prop"，类似于一个自定义 attribute。
    // 这个 prop 名为 todo。
    props: ['b','a'],
    template: '<li>{{ b.text }}{{a.id}}</li>'
});
