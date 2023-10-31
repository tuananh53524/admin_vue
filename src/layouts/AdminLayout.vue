<template>
  <main class="d-flex">
    <nav class="bg-dark pt-2">
      <ul class="nav nav-pills nav-sidebar flex-column">
        <li class="nav-item">
          <a href="user"
            ><div class="d-flex text-white px-2 align-items-center">
              <i class="fa-regular fa-user"></i>
              <span class="d-inline-block ms-2">User</span>
            </div></a
          >
        </li>
        <hr class="dropdown-divider bg-white" />
        <li class="nav-item dropdown">
          <a
            data-bs-toggle="collapse"
            href="#collapseExample"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
            ><div class="d-flex text-white px-2 align-items-center">
              <i class="fa-brands fa-pagelines"></i>
              <span class="d-inline-block ms-2">Dropdown</span>
            </div></a
          >
          <ul
            class="collapse bg-transparent border-0 w-100"
            id="collapseExample"
          >
            <li><a class="text-white" href="#">Action</a></li>
            <li><a class="text-white" href="#">Another action</a></li>
            <li><a class="text-white" href="#">Something else here</a></li>
          </ul>
        </li>
        <hr class="dropdown-divider bg-white" />
        <li class="nav-item dropdown">
          <a
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample2"
            ><div class="d-flex text-white px-2 align-items-center">
              <i class="fa-solid fa-file"></i>
              <span class="d-inline-block ms-2">Dropdown</span>
            </div></a
          >
          <ul
            class="collapse bg-transparent border-0 w-100"
            id="collapseExample2"
          >
            <li><a class="text-white" href="#">Action</a></li>
            <li><a class="text-white" href="#">Another action</a></li>
            <li><a class="text-white" href="#">Something else here</a></li>
          </ul>
        </li>
        <hr class="dropdown-divider bg-white" />
      </ul>
    </nav>
    <div class="container-fluid pt-2">
      <header class="d-flex justify-content-between">
        <i class="fa-solid fa-bars fs-4 pe-auto"></i>
        <div class="dropdown">
          <a
            href="#"
            class="d-flex align-items-center text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              class="rounded-circle me-2"
            />
            <strong>Admin</strong>
          </a>
          <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </header>
      <hr class="dropdown-divider">
      <RouterView />
    </div>
  </main>
</template>
<style scoped>
nav {
  width: 2rem;
  overflow-x: hidden;
  top: 0;
  left: 0;
  min-height: 100vh;
  transition: all 0.5s;
}
nav:hover {
  width: 14rem;
}
nav .nav-item ul {
  transition: all 0.5s;
  opacity: 0;
}
nav .nav-item ul li {
  width: max-content;
}
nav:hover .nav-item ul {
  opacity: 1;
}

nav i {
  font-size: 20px;
}
</style>
