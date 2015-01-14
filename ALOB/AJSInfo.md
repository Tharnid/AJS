# Angular Info
---

### UI Router Info

#### Steps

- Download
- Set up script tag for UI Router
- set ui-router as dependency in main module

### Layout view

#### Steps

- Identify where the views appear
- Add ui-view directive
- use data-ui-view

### Route States

- state 
- productList
- productDetail
- productEdit

### $stateProver => $stateProviderService

- associating URL with state is deep-linking
- locations can be bookmarked
- templateUrl => displays in ui-view directive property
- controller - defines the string name associated with the controller

### Activating a route

1. Set the URL - default URL
2. Call $state.go() in the code
3. Click a link with the ui-sref directive