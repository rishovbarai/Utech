<template>
  <header class="header">
    <div class="header-left">
      <!-- Uteach Logo -->
      <img src="/logo.png" alt="Uteach Logo" class="logo">
      <nav :class="{ 'nav-open': isMenuOpen }">
        <ul class="menu">
          <li class="menu-item"><a href="#" class="menu-link">Products</a></li>
          <li class="menu-item"><a href="#" class="menu-link">Solutions</a></li>
          <li class="menu-item"><a href="#" class="menu-link">Pricing</a></li>
          <li class="menu-item dropdown">
            <a href="#" class="menu-link">Resources</a>
            <img src="/down-arrow.png" alt="Dropdown Arrow" class="dropdown-arrow">
          </li>
        </ul>
        <div class="mobile-buttons">
          <a href="#" class="btn btn-outline-primary login-btn">Log In</a>
          <a href="#" class="btn btn-primary signup-btn">Sign Up Now</a>
        </div>
      </nav>
    </div>
    <div class="header-right">
      <div class="desktop-buttons">
        <a href="#" class="btn btn-outline-primary login-btn">Log In</a>
        <a href="#" class="btn btn-primary signup-btn">Sign Up Now</a>
      </div>
      <button class="burger-menu" @click="toggleMenu" :class="{ 'is-open': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
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
  gap: 24px;
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
  width: 85px;
  height: 48px;
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

.header-right {
  display: flex;
  align-items: center;
  gap: 24px;
}

.mobile-buttons {
  display: none;
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

/* Responsive Design */
@media (max-width: 1024px) {
  .header {
    padding: 0 40px;
  }
  
  .main-section {
    flex-direction: column;
    height: auto;
    padding: 40px;
    gap: 40px;
  }

  .col {
    width: 100%;
    height: auto;
    align-items: center;
    text-align: center;
  }

  .group-50 {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 40px;
  }

  .student, .teacher, .chat, .icons {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    margin: 20px 0;
  }

  .student img, .teacher img {
    width: 100%;
    height: auto;
    max-width: 300px;
    transform: none;
    right: 0;
  }

  .chat {
    max-width: 300px;
    margin: 20px auto;
  }

  .icons {
    max-width: 200px;
    margin: 20px auto;
  }
}

@media (max-width: 768px) {
  .header {
    padding: 0 20px;
  }

  .burger-menu {
    display: block;
  }

  .desktop-buttons {
    display: none;
  }

  .mobile-buttons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
  }

  nav {
    position: fixed;
    top: 80px;
    right: -100%;
    width: 100%;
    height: calc(100vh - 80px);
    background-color: white;
    transition: all 0.3s ease;
    padding: 24px;
    overflow-y: auto;
  }

  nav.nav-open {
    right: 0;
  }

  .menu {
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .menu-item {
    width: 100%;
    justify-content: center;
    height: auto;
  }

  .dropdown {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .header {
    padding: 0 16px;
  }

  .logo {
    height: 32px;
  }
  
  .main-section {
    padding: 20px;
  }

  .col {
    gap: 40px;
  }

  .student img, .teacher img {
    max-width: 250px;
  }

  .chat {
    max-width: 250px;
  }

  .icons {
    max-width: 150px;
  }
}
</style>