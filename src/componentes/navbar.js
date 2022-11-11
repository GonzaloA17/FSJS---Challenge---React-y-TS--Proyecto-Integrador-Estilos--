import React from 'react'

export const NavBar = () => {
    return (
        <div>
            <div class="bs-component">
                <nav class="navbar navbar-expand-xl navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">AutoMoviliaria</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarColor02">
                            <ul class="navbar-nav me-auto">                                
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Contactenos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sobre Nosotros</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle show" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Categorias</a>
                                    <div class="dropdown-menu show" data-bs-popper="static">
                                        <a class="dropdown-item" href="#">Autos</a>
                                        <a class="dropdown-item" href="#">Camionetas</a>
                                        <a class="dropdown-item" href="#">Camiones</a>
                                    </div>
                                </li>
                            </ul>
                            <form class="d-flex">
                                <input class="form-control me-xl-2" type="text" placeholder="Buscar..."></input>
                                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
