const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0866/5968/products/NOK13895_5f6ec7fd-3407-4194-b10d-efd409986a6d_540x.jpg?v=1652815594",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "hoodie",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0866/5968/products/Ygp7XTVY_720x.jpg?v=1666981416",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "CREWNECK",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0866/5968/products/5aqPJ2MY_1080x.jpg?v=1666723306",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0866/5968/products/UwjmbFZk_1080x.jpg?v=1666751199",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://cdn.shopify.com/s/files/1/0866/5968/products/11KRJFVw_1080x.jpg?v=1666743001",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
