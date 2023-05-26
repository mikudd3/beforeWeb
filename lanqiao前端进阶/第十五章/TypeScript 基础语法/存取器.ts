class User {
    name: string = "默认用户名";
  }
  
  let u = new User();
  u.name = "天字一号";
  console.log(`该用户的昵称为：${u.name}。`);
  u.name = "随便修改";
  console.log(`该用户的昵称为：${u.name}。`);