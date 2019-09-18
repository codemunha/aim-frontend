<template>
  <nav class="main-topbar navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item d-none d-sm-inline-block">
        <i class="fas fa-home"></i><span> PORTAL</span>
      </li>
    </ul>

    <ul class="navbar-nav ml-auto">
      <li class="nav-item d-none d-sm-inline-block">
        <i class="fas fa-user"></i><span> Username | Rolename</span>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <i class="fas fa-sign-out-alt"></i><span> ออกจากระบบ</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppTopbar'
}
</script>

<style scoped> 
  .main-header{
    background-color:#2997ca;
    color:white;
  }
</style>
