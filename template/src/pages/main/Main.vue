<template>
    <el-container class="main">
        <div class="nav-wrapper" v-show="!isCollapse">
            <div class="nav-title">测试管理系统</div>
            <el-menu :default-openeds="['1']" class="menu-width">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>测试</template>
                    <el-menu-item-group class="nav-li-group">
                        <template slot="title">分组一</template>
                        <router-link to="/projectList"><el-menu-item index="1-1">示例管理</el-menu-item></router-link>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </div>
        <el-container>
            <el-header class="navbar">
                <i class="collapse-btn iconfont" :class="{'icon-ic_menufold':isCollapse,'icon-ic_menuunfold':!isCollapse}" @click="onCollapse"/>
                <el-dropdown class="menu" trigger="click" @command="onMenuClick">
                    <div class="user-name">小白菜</div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>登出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-header>
            <el-main class="replace-view">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"/>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"/>
            </el-main>
        </el-container>
    </el-container>
</template>
<script lang="ts" src="./Main.ts"></script>

<style lang="scss">
    .main {
        height: 100%;
        .nav-wrapper{
            width: 200px;
            background-color: #1E2337;
            overflow: auto
        }
        /*侧边栏*/
        .el-submenu .el-menu-item{
            color: white;
        }
        .el-menu-item:hover, .el-menu-item:focus{
            background-color: #354052;
        }
        .el-submenu__title:hover{
            background-color: #354052;
        }
        .el-submenu__title{
            color: white;
        }
        .el-menu {
            border: none;
            background-color: inherit;
            color: white;
            .nav-li-name{
                color: white;
            }
            .nav-li-group{
                background-color: rgb(30, 35, 55);
                color: white
            }
        }
        .nav-title{
            height: 56px;
            text-align: center;
            line-height: 56px;
            color: white;
            background-color: #20A0FF;
        }
        /* 头部导航*/
        .navbar {
            background-color: #FFF;
            border-bottom: 1px solid rgba(232, 232, 232, 1);
            line-height: 60px;
            height: 60px;
            display: flex;
            overflow: hidden;
            justify-content: space-between;
            align-items: center;
            .collapse-btn {
                cursor: pointer;
            }
            .user-name {
                width: 100px;
                background: url(~assets/image/auth/ic_user.png) #fff center left no-repeat;
                background-size: 32px;
                padding-left: 47px;
                cursor: pointer;
            }
        }
        .replace-view{
            padding: 0;
            display: flex;
        }
    }
</style>
