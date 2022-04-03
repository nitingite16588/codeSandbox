export const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "Puplic",
      isFolder: false
    },
    {
      name: "Src",
      isFolder: true,
      items: [
        {
          name: "App.js",
          isFolder: false
        },
        {
          name: "Src child folder",
          isFolder: true,
          items: [
            {
              name: "child 1.js",
              isFolder: false
            },
            {
              name: "child 2.js",
              isFolder: false
            }
          ]
        }
      ]
    },
    {
      name: "route",
      isFolder: false
    },
    {
      name: "package.json",
      isFolder: false
    }
  ]
};
