<template>
    <div class="login-view">
        <div class="login-form">
            <div class="login-left">
                <img src="~assets/image/auth/ic_login.png" :alt="$t('message.m.pages.login.noBackImg')">
            </div>
            <div class="login-right">
                <header>{{$t('message.m.pages.login.title')}}</header>
                <section>
                    <div class="wrap">
                        <el-form :rules="rules" ref="ruleForm" :model="ruleForm">
                            <el-form-item prop="name">
                                <div style="position: relative">
                                    <el-input v-model="ruleForm.name" :placeholder="$t('message.m.pages.login.userNamePhd')" ref="name" @keydown.native="onConfirm($event,'name')" style="margin-top: 71px;"></el-input>
                                    <img src="~assets/image/auth/ic_login_user_hl.svg" style="position: absolute;left: 108px;top:84px;width: 15px">
                                </div>

                            </el-form-item>
                            <el-form-item prop="password">
                                <div style="position: relative">
                                    <el-input v-model="ruleForm.password" :placeholder="$t('message.m.pages.login.userPwdPhd')" ref="password" type="password" @keydown.native="onConfirm($event,'password')" style="margin-top: 10px"></el-input>
                                    <img src="~assets/image/auth/ic_login_psw_hl.svg" style="position: absolute;left: 108px;top:22px;width: 15px">
                                </div>


                            </el-form-item>
                        </el-form>
                    </div>
                </section>
                <section>
                    <el-button class="btn-login" type="primary" :disabled="!ruleForm.name || !ruleForm.password" ref="login" @click="onLogin()">{{$t('message.m.pages.login.loginBtn')}}</el-button>
                </section>
            </div>
        </div>
        <footer class="page-footer">
            <p>Copyright @ 1997-2018HEADING Co., Ltd. All Rights Reserved. 海鼎公司 版权所有</p>
        </footer>
        <!--<ElCustomDialog-->
                <!--title="自定义提示"-->
                <!--confirmText="自定义确认"-->
                <!--cancelText="自定义取消"-->
                <!--@before-close="dialogShow = false"-->
                <!--@confirm="dialogShow = false"-->
                <!--@cancel="dialogShow = false"-->
                <!--:isDialogShow="dialogShow">-->
            <!--<div style="height: 40px">11111</div>-->
            <!--<div style="height: 40px">11111</div>-->
            <!--<div style="height: 40px">11111</div>-->
            <!--<div style="height: 40px">11111</div>-->
            <!--<template slot="other">-->
                <!--<el-button size="small" type="primary" @click="dialogShow = false">其它</el-button>-->
            <!--</template>-->
        <!--</ElCustomDialog>-->
    </div>
</template>

<script lang="ts" src="./Login.ts"></script>

<style lang="scss">
    .login-view {
        background-color: #fafafa;
        display: flex;
        align-items: center;
        height:100%;
        width: 100%;
        justify-content: center;
        .el-form-item__error {
            margin-left: 105px;
        }
        .el-input {
            width: 284px;
            height: 43px;
            margin-left: 102px;
        }
        .el-input__inner {
            padding-left: 35px;
        }
        .login-form {
            display: flex;
            width: 1138px;
            height: 711px;
            .login-left {
                float: left;
                img {
                    height: 711px;
                    width: 649px;
                }
            }
            .login-right {
                float: left;
                width: 489px;
                height: 533px;
                background-color: white;
                position: relative;
                left: -80px;
                top: 53px;
                .btn-login {
                    width: 284px;
                    height: 43px;
                    margin-left: 102px;
                    margin-top: 10px;
                }
                header {
                    width: 178px;
                    height: 32px;
                    color: #455261;
                    font-size: 21px;
                    font-family: 微软雅黑;
                    margin-top: 71px;
                    margin-left: 156px;
                }
            }
        }
        .page-footer {
            position: absolute;
            bottom: 53px;
            left: 50%;
            margin-left: -270px;
            p {
                text-align: center;
                color: #CED0DA;
                height: 18px;
            }
        }
    }
</style>