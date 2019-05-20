class UserObject {


  constructor(email: string, imageUrl: string, provider: string, token: string, id: string, name: string) {
    this.email = email;
    this.imageUrl = imageUrl;
    this.provider = provider;
    this.token = token;
    this.id = id;
    this.name = name;
  }

  email: string;
  imageUrl: string;
  provider: string;
  token: string;
  id: string;
  name: string;
}

export {UserObject};
