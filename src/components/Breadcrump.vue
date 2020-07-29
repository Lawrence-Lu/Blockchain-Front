<!--banner to show from Home to a subpage-->
<template>
    <div class="hyip-breadcrump extra_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-8">
                    <div class="breadcrump-title text-center">
                        <h2 class="add-space"><slot></slot></h2>
                        <span>首页 <i class="fas fa-chevron-right"></i> <slot></slot></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Breadcrump"
    }
</script>

<style scoped>

</style>