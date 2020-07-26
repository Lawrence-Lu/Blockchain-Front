<template>
    <!-- footer begin-->
    <div class="footer" style="box-shadow: 0 -2px 15px 2px rgba(14,14,0,0.4); margin-top: 50px">
        <div class="footer-top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6">

                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-3">
                        <div class="useful-link">
                            <h3>公 司 信 息</h3>
                            <ul>
                                <li><router-link :to="'/aboutus'"><span><i class="fas fa-chevron-right"></i></span>关 于 我 们</router-link></li>
                                <li><a href="#"><span><i class="fas fa-chevron-right"></i></span>品 牌 故 事</a></li>
                                <li><a href="#"><span><i class="fas fa-chevron-right"></i></span>隐 私 政 策</a></li>
                                <li><a href="#"><span><i class="fas fa-chevron-right"></i></span>服 务 条 款</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-2 col-md-3">
                        <div class="useful-link">
                            <h3>顾 客 支 持</h3>
                            <ul>
                                <li><a href="#"><span><i class="fas fa-chevron-right"></i></span>保 险 计 划</a></li>
                                <li><a href="#"><span><i class="fas fa-chevron-right"></i></span>保 险 服 务</a></li>
                                <li><a href="#"><span><i class="fas fa-chevron-right"></i></span>资 料 下 载</a></li>
                                <li><a href="#"><span><i class="fas fa-chevron-right"></i></span>注 册 教 程</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6">
                        <div class="secure-area">
                            <h3>站 外 APP</h3>
                            <div class="logo">
                                <div class="row">
                                    <div class="col-xl-4 col-lg-4 col-logo">
                                        <div class="single-logo">
                                            <img src="../assets/img/payment-1.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-logo">
                                        <div class="single-logo">
                                            <img src="../assets/img/payment-2.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-logo">
                                        <div class="single-logo">
                                            <img src="../assets/img/payment-3.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-logo">
                                        <div class="single-logo">
                                            <img src="../assets/img/payment-4.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-logo">
                                        <div class="single-logo">
                                            <img src="../assets/img/payment-3.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-xl-4 col-lg-4 col-logo">
                                        <div class="single-logo">
                                            <img src="../assets/img/payment-2.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 d-xl-flex d-lg-flex align-items-center">
                        <div class="copyright">
                            <p>Copyright © 2020 TAOBAO. All Rights Reserved.</p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6">
                        <div class="social">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    // named FooterVue to prevent conflicts with the original label footer
    export default {
        name: "FooterVue"
    }
</script>

<style scoped>

</style>
