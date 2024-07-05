### Session 会话

#### Account-Session

- 为每个账号分配的会话

```
// 获取当前 Account-Session，需要登录
StpUtil.getSession();

// 获取当前 Account-Session，未创建时是否创建
StpUtil.getSession(boolean create);

// 获取指定 Account-Session，需要登录
StpUtil.getSessionByLoginId(Object loginId);
StpUtil.getSessionBySessionId(String sessionId);

// 获取指定 Account-Session，未创建时是否创建
StpUtil.getSessionByLoginId(Object loginId, boolean create);
```

#### Token-Session

- 为每个令牌分配的会话

```
// 获取当前 Token-Session
StpUtil.getTokenSession();

// 获取指定 Token-Session
StpUtil.getTokenSessionByToken(String token);
```

_注：_

- Token-Session 默认登录才能获取
- 通过修改 sa-token.token-session-check-login = false，可在未登录时获取 Token-Session
- 使用 StpUtil.getAnonTokenSession()，可在未登录时获取 Token-Session

#### Custom-Session

- 自定义的会话

```
// 查询指定 Custom-Session 是否存在
SaSessionCustomUtil.isExists(String id);

// 获取指定 Custom-Session，未创建则新建
SaSessionCustomUtil.getSessionById(String id);

// 获取指定 Custom-Session，未创建时是否创建
SaSessionCustomUtil.getSessionById(String id, boolean create);

// 删除指定 Custom-Session
SaSessionCustomUtil.deleteSessionById(String id);
```

#### Session 操作

- Account-Session、Token-Session、Custom-Session 都属于 SaSession

```
// 写值
session.set(String key, Object value);

// 写值，存在则不写入
session.setDefaultValue(String key, Object value);

// 取值
session.get(String key);

// 取值，不存在则返回第二参数
session.get(String key, Object value);
session.get(String key, () -> {});

// 取值，类型转换
session.getInt(String key);
session.getLong(String key);
session.getString(String key);
session.getFloat(String key);
session.getDouble(String key);
session.getModel(String key, Class<T> _class); // 指定类型
session.getModel(String key, Class<T> _class, Object value); // 指定类型，不存在则返回第三参数

// 是否存在 key，返回 boolean
session.has(String key);

// 删值
session.delete(String key);

// 清空
session.clear();

// 获取所有 key，返回 Set<String>
session.keys();

// 获取 sessionId
session.getId();

// 获取创建时间，返回时间戳
session.getCreateTime();

// 获取底层数据对象，如果更新 map 需要调用 session.update()
session.getDataMap();

// 更新底层数据对象
session.update();

// 注销
session.logout();
```
