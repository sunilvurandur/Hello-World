### 272 - Assignment
## Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/get-started)
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) (for GKE)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/) (optional, for local Kubernetes testing)

## Step 1: Running the Application Locally

### Hello Service
1. Navigate to the `hello-service` directory:
    ```bash
    cd hello-service
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the Hello service:
    ```bash
    node index.js
    ```
4. Test the Hello service by visiting `http://localhost:3000/hello` in your browser. You should see the string "Hello".

### World Service
1. Navigate to the `world-service` directory:
    ```bash
    cd world-service
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the World service:
    ```bash
    node index.js
    ```
4. Test the World service by visiting `http://localhost:3001/world` in your browser. You should see the string "World".

## Step 2: Building Docker Images

### Hello Service
1. Navigate to the `hello-service` directory and build the Docker image:
    ```bash
    docker build -t hello-service .
    ```
2. Verify that the image is created:
    ```bash
    docker images
    ```

### World Service
1. Navigate to the `world-service` directory and build the Docker image:
    ```bash
    docker build -t world-service .
    ```
2. Verify that the image is created:
    ```bash
    docker images
    ```

## Step 3: Running Docker Containers Locally

### Hello Service
1. Run the Hello service in a Docker container:
    ```bash
    docker run -p 3000:3000 hello-service
    ```
2. Test by visiting `http://localhost:3000/hello` in your browser.

### World Service
1. Run the World service in a Docker container:
    ```bash
    docker run -p 3001:3001 world-service
    ```
2. Test by visiting `http://localhost:3001/world` in your browser.

## Step 4: Pushing Docker Images to Google Container Registry (GCR)

1. Tag the images for GCR:
    ```bash
    docker tag hello-service gcr.io/[YOUR-PROJECT-ID]/hello-service:latest
    docker tag world-service gcr.io/[YOUR-PROJECT-ID]/world-service:latest
    ```

2. Authenticate Docker to Google Cloud:
    ```bash
    gcloud auth configure-docker
    ```

3. Push the images to GCR:
    ```bash
    docker push gcr.io/[YOUR-PROJECT-ID]/hello-service:latest
    docker push gcr.io/[YOUR-PROJECT-ID]/world-service:latest
    ```

## Step 5: Deploying to Kubernetes on GKE

### Step 5.1: Create a GKE Cluster
1. Create a GKE cluster:
    ```bash
    gcloud container clusters create hello-world-cluster --zone us-central1-a
    ```
2. Get cluster credentials:
    ```bash
    gcloud container clusters get-credentials hello-world-cluster --zone us-central1-a
    ```

### Step 5.2: Create Kubernetes Deployment Manifests

In the `kubernetes/` directory, you'll find two YAML files:
- `hello-deployment.yaml`
- `world-deployment.yaml`

These files define the deployments and services for each microservice.

### Step 5.3: Deploy the Services
1. Apply the manifests to deploy the Hello and World services:
    ```bash
    kubectl apply -f kubernetes/hello-deployment.yaml
    kubectl apply -f kubernetes/world-deployment.yaml
    ```

### Step 5.4: Verify the Deployment
1. Check the status of your services:
    ```bash
    kubectl get services
    ```

2. Note the external IP addresses assigned to each service and test the endpoints:
    - `http://<hello-service-ip>/hello`
    - `http://<world-service-ip>/world`

## Step 6: Creating a Script to Combine Responses

To combine the "Hello" and "World" responses, you can create a simple Node.js script like this:

```javascript
const axios = require('axios');

(async () => {
  try {
    const helloResponse = await axios.get('http://<hello-service-ip>/hello');
    const worldResponse = await axios.get('http://<world-service-ip>/world');

    console.log(`${helloResponse.data} ${worldResponse.data}`); // Outputs: "Hello World"
  } catch (error) {
    console.error('Error fetching services:', error);
  }
})();
