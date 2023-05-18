<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="container py-2">
            <routerLink :to="{name: 'home'}" class="navbar-brand">
                <span>Toedoe</span>
                <strong>List</strong>
            </routerLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <routerLink :to="{name: 'tasks'}" class="nav-link">Tasks</routerLink>
                    </li>
                    <li class="nav-item">
                        <routerLink :to="{name: 'summary'}" class="nav-link">Summary</routerLink>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <routerLink :to="{name: 'login'}" class="nav-link">Login</routerLink>
                    </li>
                    <li class="nav-item">
                        <routerLink :to="{name: 'register'}" class="nav-link">Register</routerLink>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="btn btn-outline-secondary ms-2">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>