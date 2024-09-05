#### CMPE-272 - ASSIGNMENT 1 : Hello World
## Prerequisites
- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/get-started)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)

## Step 1: Running the Application Locally

### Hello Service
    ```bash
    cd hello_service
    npm install
    node index.js
    ```
Test the Hello service by visiting `http://localhost:3000/hello` in your browser. You should see the string "Hello".

### World Service
1. Navigate to the `world_service` directory:
    ```bash
    cd world_service
    npm install
    node index.js
    ```
Test the World service by visiting `http://localhost:3001/world` in your browser. You should see the string "World".

### Testing Service
1. Navigate to the `testing_service` directory:
    ```bash
    cd world_service
    npm install
    node index.js
    ```
Test the World service by visiting `http://localhost:3001/world` in your browser. You should see the string "World".

## Step 2: Building Docker Images

1. Commands used to build docker images:
    ```bash
    docker build -t hello_service ./hello_service
    docker build -t world_service ./world_service
    docker build -t testing_service ./testing_service
    ```
2. Verifying docker images:
    ```bash
    docker images
    ```
    <img width="603" alt="Screenshot 2024-09-05 at 2 50 23 PM" src="https://github.com/user-attachments/assets/440b8741-daed-4630-9e77-1c1af26436f1">

## Pushing Docker Images to Dockerhub

1. Tag the images for GCR:
    ```bash
    docker tag hello_service sunilvurandur1/hello_service:latest
    docker tag world_service sunilvurandur1/world_service:latest
    docker tag testing_service sunilvurandur1/testing_service:latest

    docker push sunilvurandur1/hello_service:latest
    docker push sunilvurandur1/world_service:latest
    docker push sunilvurandur1/testing_service:latest
    ```

### Step 5.2: Create Kubernetes Deployment Manifests using minikube

In each individual directory, created deployment yaml files:
- `hello-deployment.yaml`
- `world-deployment.yaml`
- `testing-deployment.yaml`

These files define the deployments and services for each microservice.

### Deploy the Services
1. command used to deploy:
    ```bash
    kubectl apply -f hello-deployment.yaml
    kubectl apply -f world-deployment.yaml
    kubectl apply -f tesing-deployment.yaml
    ```

### Verify the Deployment
    ```bash
    kubectl get services
    ```
<img width="668" alt="Screenshot 2024-09-05 at 2 58 04 PM" src="https://github.com/user-attachments/assets/385cabe8-4bf6-41bd-8d76-ed9443280485">

## Testing each service

# hello service
minikube service tail
<img width="811" alt="Screenshot 2024-09-05 at 1 46 03 PM" src="https://github.com/user-attachments/assets/b81eafd2-9bf0-4255-9385-be18dfb6bf0b">

<img width="1468" alt="Screenshot 2024-09-05 at 2 14 53 PM" src="https://github.com/user-attachments/assets/0d1f58c9-be1c-4f86-98b5-99e6410f271f">

# world service
<img width="702" alt="Screenshot 2024-09-05 at 2 13 41 PM" src="https://github.com/user-attachments/assets/0cd4019e-8e3b-4eb9-858f-36b467b1577b">

<img width="1470" alt="Screenshot 2024-09-05 at 2 14 43 PM" src="https://github.com/user-attachments/assets/0c3ae2b4-3130-4777-9ef9-8780b1a82bb7">

# testing service
<img width="1025" alt="Screenshot 2024-09-05 at 2 14 09 PM" src="https://github.com/user-attachments/assets/b6ea6fc3-a8f3-43ec-bf6a-615341e4a377">

<img width="1470" alt="Screenshot 2024-09-05 at 2 14 58 PM" src="https://github.com/user-attachments/assets/cafcab55-d0c5-481e-8e49-27f05b1ac3f8">



