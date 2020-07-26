<template>
    <div>
        <div class="header">
            <div class="header-top">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-xl-5 col-lg-5">
                            <div class="support-bar-left">
                                <ul>
                                    <li><span><i class="fas fa-phone-square"></i></span>+86 13635359812</li>
                                    <li><span><i class="fas fa-envelope"></i></span>201730340361@mail.scut.edu.com</li>
                                </ul>
                            </div>
                        </div>
<!--                        <div class="col-xl-5 col-lg-5">-->
<!--                            <div v-if="this.$store.state.isLogin" class="support-bar-right">-->
<!--                                <ul>-->
<!--                                    <li>距离上次登录时间：{{ fromLastTime }} Days</li>-->
<!--                                </ul>-->
<!--                            </div>-->
<!--                            <div v-else class="support-bar-right">-->
<!--                                <router-link :to="'login'" style="color: white; margin-right: 10px">登录</router-link>-->
<!--                                <router-link :to="'register'"  style="color: white;">注册</router-link>-->
<!--                            </div>-->
                            <div class="support-bar-right">
                              <span style="color: white; margin-right: 10px">登录</span>
                              <span :to="'register'"  style="color: white;">注册</span>
                            </div>
<!--                        </div>-->
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderVue",
        components: {
            // Navigator
        },
        data () {
            return {
                fromLastTime: 1,
            }
        }
    }
</script>

<style scoped>
    .logo-img img {
        height: 100px;
    }
</style>
