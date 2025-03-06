<template>
  <header class="header">
    <div class="header-left">
      <img src="/logo.png" alt="Uteach Logo" class="logo">
    </div>
    
    <nav :class="{ 'nav-open': isMenuOpen }">
      <ul class="menu">
        <li class="menu-item"><a href="#" class="menu-link">Products</a></li>
        <li class="menu-item"><a href="#" class="menu-link">Solutions</a></li>
        <li class="menu-item"><a href="#" class="menu-link">Pricing</a></li>
        <li class="menu-item dropdown">
          <a href="#" class="menu-link">Resources</a>
          <img src="/down-arrow.png" alt="Dropdown Arrow" class="dropdown-arrow">
        </li>
        <li class="menu-item">
          <a href="#" class="btn btn-outline-primary login-btn">Log In</a>
        </li>
        <li class="menu-item">
          <a href="#" class="btn btn-primary signup-btn">Sign Up Now</a>
        </li>
      </ul>
    </nav>

    <button class="burger-menu" @click="toggleMenu" :class="{ 'is-open': isMenuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  padding: 0 80px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
}

.burger-menu {
  display: none;
  width: 24px;
  height: 24px;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 200;
}

.burger-menu span {
  display: block;
  width: 100%;
  height: 2px;
  background-color: #0F172A;
  position: absolute;
  transition: all 0.3s ease;
}

.burger-menu span:first-child {
  top: 2px;
}

.burger-menu span:nth-child(2) {
  top: 11px;
}

.burger-menu span:last-child {
  bottom: 2px;
}

.burger-menu.is-open span:first-child {
  transform: rotate(45deg);
  top: 11px;
}

.burger-menu.is-open span:nth-child(2) {
  opacity: 0;
}

.burger-menu.is-open span:last-child {
  transform: rotate(-45deg);
  bottom: 11px;
}

.menu {
  display: flex;
  gap: 48px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 12px 8px;
  gap: 8px;
}

.menu-link {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #0F172A;
  text-decoration: none;
}

.menu-link:hover {
  color: #EA580C;
}

.dropdown {
  position: relative;
}

.dropdown-arrow {
  width: 12px;
  height: 12px;
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.dropdown:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.login-btn {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 16px;
  color: #0F172A;
  border-radius: 6px;
  border: 1px solid transparent;
}

.login-btn:hover {
  color: #EA580C;
  background-color: #f8fafc;
  transform: translateY(-1px);
  border: 1px solid #EA580C;
}

.signup-btn {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 12px 24px;
  color: #000;
  background-color: #ffffff;
  border: 1px solid black;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.signup-btn:hover {
  background-color: #c2410c;
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

@media (max-width: 1024px) {
  .header {
    width: 100%;
    height: 67px;
    padding: 16px;
    justify-content: space-between;
  }

  .burger-menu {
    display: block;
  }

  nav {
    position: fixed;
    top: 67px;
    left: 0;
    width: 392px;
    height: calc(100vh - 67px);
    background-color: white;
    transition: all 0.3s ease;
    padding: 24px;
    overflow-y: auto;
    transform: translateX(-100%);
  }

  nav.nav-open {
    transform: translateX(0);
  }

  .menu {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .menu-item {
    width: 100%;
    justify-content: center;
  }

  .dropdown {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .header {
    width: 393px;
  }

  .logo {
    height: 32px;
  }
}
</style>