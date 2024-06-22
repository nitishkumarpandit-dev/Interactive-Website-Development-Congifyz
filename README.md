# API Integration Task

## Steps

1. **Choose a public API**  
   We are using the JSONPlaceholder API, which is a free online REST API for testing and prototyping.

2. **Understand the API Endpoints**  
   We will use the `/posts` endpoint to fetch a list of posts.

   - **Endpoint URL:** `https://jsonplaceholder.typicode.com/posts`

3. **Use fetch() in script.js to Retrieve Data from the API**  
   In `script.js`, use the `fetch()` function to get data from the API and then update the DOM.

4. **Parse the JSON Data and Dynamically Update the DOM**  
   After fetching the data, parse the JSON and create DOM elements to display the fetched information.

## Implementation

### HTML File

Create an HTML file with a container element to display the posts.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>API Integration Example</title>
    <style>
      .post {
        border: 1px solid #ccc;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
      }
    </style>
  </head>
  <body>
    <div id="posts-container">
      <!-- Posts will be dynamically added here -->
    </div>
    <script src="script.js"></script>
  </body>
</html>
```
