import Vue from 'vue';
/*
* 全局唯一事件传递总线，用于实现跨组件列表刷新等功能
*/
const bus = new Vue();
/*
* 全局事件池
* 数据格式：
* [{
*   // 事件ID
*   id:xxx,
*   // 事件激活状态
*   activate:true,
*   // 额外数据
*   extra:xxx
* }]
*/
const eventPool = new Map();


export default {
  // 总线
  bus: bus,
  // 注册一个全局事件
  register(name, id, callback, extra = null) {
    // 检查事件是否已经存在
    let events = eventPool.get(name);
    if (events !== undefined) {
      let event = events.get(id);
      if (event !== undefined) {
        // 事件已存在，注册失败
        throw new Error(name + '_' + id + '是一个已注册的事件，事件注册失败');
      }
    } else {
      // 如果不存在，则新建
      events = new Map()
      eventPool.set(name, events)
    }
    let event = {
      name: name,
      id: id,
      activate: true,
      extra: extra
    }
    // 存放到全局事件池
    events.set(id, event)
    // 监听事件
    bus.$on(name + '_' + id, callback);
  },
  // 反注册一个全局事件
  unregister(name, id) {
    // 检查事件是否已经存在
    let events = eventPool.get(name);
    if (events !== undefined) {
      let event = events.get(id);
      if (event !== undefined) {
        // 事件已存在，注册失败
        event = undefined
        events.delete(id)
        bus.$off(name + '_' + id)
        return
      }
    }
    // 如果不存在，则新建
    console.warn(name + '_' + id + '是不存在，反注册事件失败');
  },
  // 向事件发送消息
  emit(name, id, ...params) {
    // 检查事件是否已经存在
    let events = eventPool.get(name);
    if (events !== undefined) {
      let event = events.get(id);
      if (event !== undefined) {
        // 事件存在
        if (event.activate) {
          bus.$emit(name + '_' + id, ...params, event.extra)
          return
        }
      }
    }
    // 如果不存在，则新建
    console.warn(name + '_' + id + '是不存在，emit失败');
  },
  // 激活一个事件
  activate(name, id) {
    // 检查事件是否已经存在
    let events = eventPool.get(name);
    if (events !== undefined) {
      let event = events.get(id);
      if (event !== undefined) {
        // 事件已存在
        event.activate = true
        return
      }
    }
    // 如果不存在，则新建
    console.warn(name + '_' + id + '是不存在，激活事件失败');
  },
  // 反激活一个事件
  inactivate(name, id) {
    // 检查事件是否已经存在
    let events = eventPool.get(name);
    if (events !== undefined) {
      let event = events.get(id);
      if (event !== undefined) {
        // 事件已存在
        event.activate = false
        return
      }
    }
    // 如果不存在，则新建
    console.warn(name + '_' + id + '是不存在，反激活事件失败');
  },
};
