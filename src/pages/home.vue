<template>
    <div class="blog_wrapper" id="blog_wrapper">
        <div class="blog_home_wrapper d-flex justify-center align-center flex-column">
            <div class="blog_info">
                <div class="blog_name_wrapper d-flex justify-center align-center flex-column">
                    <div class="blog_name">sunshine</div>
                    <div class="blog_sub">光落在你脸上,可爱一如往常</div>
                </div>
                <el-input
                        class="home_search_input"
                        placeholder=""
                        suffix-icon="el-icon-search"
                        v-model="keyword"></el-input>
                <div class="blog_nva_list d-flex justify-around align-center">
                    <div :key="v" @click="nvaClick(nva)" class="blog_nva" v-for="(nva, v) in nvaArr">
                        <span class="blog_nva_item">
                              <i class="blog_nva_item_icon" v-html="nva.icon"></i>
                              {{nva.text}}
                        </span>
                    </div>
                </div>
            </div>
            <div @click="arrowEvn" class="arrow">&#xe60e;</div>
        </div>
        <div class="blog_article"></div>
    </div>
</template>

<script>
export default {
    name: 'home',
    data() {
        return {
            keyword: '',
            nvaArr: [
                {icon: '&#xe67d;', text: '文章'},
                {icon: '&#xe630;', text: '留言板'},
                {icon: '&#xe663;', text: '友链'},
                {icon: '&#xe617;', text: '关于'}
            ],
            scrollCorrection: 80
        }
    },
    mounted() {
        this.movedShowScroll();
    },
    methods: {
        nvaClick(nva) {
            console.log(nva.text)
        },
        arrowEvn() {
            let moveH = document.getElementsByClassName('blog_home_wrapper')[0].getBoundingClientRect().height;
            $(window).animate({
                'scrollTop': moveH
            })
            // this.scrolltoElement('.blog_article');
        },
        movedShowScroll() {

        }
        // scrolltoElement(elem, correction = this.scrollCorrection) {
        //     debugger
        //     const $elem = elem.href ? $(elem.getAttribute('href')) : $(elem);
        //     $('html, body').animate({
        //         'scrollTop': $elem.offset().top - correction
        //     }, 500);
        // }
    }
}
</script>

<style lang="less">
.blog_wrapper {
    width: 100%;
    height: 100%;
    overflow-y: hidden;

    .blog_home_wrapper {
        width: 100%;
        height: 100%;
        .backgroundImg('../assets/imgs/home_bg_cloud.jpg');
        color: @fontColor;

        .blog_info {
            width: 300px;
            height: 300px;
            /*background: #42b983;*/

            .blog_name_wrapper {
                margin-bottom: 50px;
                font: italic 4em Georgia, serif;

                .blog_sub {
                    font-size: 1.2rem;
                }
            }


            .el-input__inner {
                background: rgba(255, 255, 255, 0.6);
                color: #555;
            }

            // 重制图标颜色
            .el-input__prefix, .el-input__suffix {
                color: #555;
            }

            > .blog_nva_list {
                margin-top: 10px;

                > .blog_nva {
                    cursor: pointer;
                    padding: 2px;
                    .blog_nva_item {
                        padding: 2px;
                        &:hover {
                            border-bottom: 2px solid @fontColor;
                        }

                        > .blog_nva_item_icon {
                            font-family: iconfont;
                        }
                    }
                }
            }
        }


        > .arrow {
            cursor: pointer;
            color: @fontColor;
            font-family: iconfont;
            position: absolute;
            bottom: 50px;
            font-size: 2rem;
            animation: scroll-down-effect 1.5s infinite;
        }

        @-moz-keyframes scroll-down-effect {
            0% {
                bottom: 0;
                opacity: 1;
            }
            50% {
                bottom: 20px;
                opacity: 0.4;
            }
            100% {
                bottom: 0;
                opacity: 1;
            }
        }
        @-webkit-keyframes scroll-down-effect {
            0% {
                bottom: 0;
                opacity: 1;
            }
            50% {
                bottom: 20px;
                opacity: 0.4;
            }
            100% {
                bottom: 0;
                opacity: 1;
            }
        }
        @-o-keyframes scroll-down-effect {
            0% {
                bottom: 0;
                opacity: 1;
            }
            50% {
                bottom: 20px;
                opacity: 0.4;
            }
            100% {
                bottom: 0;
                opacity: 1;
            }
        }
        @keyframes scroll-down-effect {
            0% {
                bottom: 0;
                opacity: 1;
            }
            50% {
                bottom: 20px;
                opacity: 0.4;
            }
            100% {
                bottom: 0;
                opacity: 1;
            }
        }
    }

    .blog_article {
        height: 500px;
        width: 100%;
        background: #42b983;
    }
}

</style>
