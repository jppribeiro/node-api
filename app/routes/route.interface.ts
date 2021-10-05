import express from 'express';

export interface RouteConfig {
    configureRoutes(): express.Application
}