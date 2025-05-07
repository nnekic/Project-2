# Project 2 – Basic HTTP Server built in Node with CI/CD, Kubernetes Deployment and Prometheus/Grafana monitoring

Basic HTTP server listens on port
Project focuses on DevOps workflows: Dockerization, GitHub Actions CI/CD pipeline, Kubernetes deployment and Prometheus/Grafana monitoring.

## Features

- HTTP server built with Node
- Health check endpoint (/health)
- Metrics exposed via /metrics endpoint
- Prometheus for getting metrics
- Grafana for dashboard visualization
- Runs in Kubernetes cluster

## Tech Stack

- Node.js
- prom-client
- Prometheus
- Grafana
- Docker
- GitHub Actions
- Kubernetes (manifests for Deployment & Service)
- Ingress Controller (external access to the app)
