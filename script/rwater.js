$(document).ready(function () {
    function judge(a1, a2, a3, a4, a5, a6, a7, a8, jud) {
        var judflag = 0;
        if (a1 <= jud && a1 != "" && a1 != null) { } else { judflag++; }
        if (a2 <= jud && a2 != "" && a2 != null) { } else { judflag++; }
        if (a3 <= jud && a3 != "" && a3 != null) { } else { judflag++; }
        if (a4 <= jud && a4 != "" && a4 != null) { } else { judflag++; }
        if (a5 <= jud && a5 != "" && a5 != null) { } else { judflag++; }
        if (a6 <= jud && a6 != "" && a6 != null) { } else { judflag++; }
        if (a7 <= jud && a7 != "" && a7 != null) { } else { judflag++; }
        if (a8 <= jud && a8 != "" && a8 != null) { } else { judflag++; }
        if (judflag === 0) {
            return 0;
        } else {
            return 1;
        }

    }
    $("#SummitBtn").click(function () {
        var d1flag = 0;
        var d111 = $("#d111").val();
        if (d111 > 6.5 && d111 < 9) {
        } else {
            d1flag++
        }
        var d112 = $("#d112").val();
        if (d112 > 6.5 && d112 < 9) {
        } else {
            d1flag++
        }
        var d113 = $("#d113").val();
        if (d113 > 6.5 && d113 < 9) {
        } else {
            d1flag++
        }
        var d114 = $("#d114").val();
        if (d114 > 6.5 && d114 < 9) {
        } else {
            d1flag++
        }
        var d121 = $("#d121").val();
        if (d121 > 6.5 && d121 < 9) {
        } else {
            d1flag++
        }
        var d122 = $("#d122").val();
        if (d122 > 6.5 && d122 < 9) {
        } else {
            d1flag++
        }
        var d123 = $("#d123").val();
        if (d123 > 6.5 && d123 <= 9) {
        } else {
            d1flag++
        }
        var d124 = $("#d124").val();
        if (d124 > 6.5 && d124 < 9) {
        } else {
            d1flag++
        }

        if (d1flag === 0) {
            $("#d1").text("合格");
        } else {
            $("#d1").text("不合格");
        }



        var d211 = $("#d211").val();
        var d212 = $("#d212").val();
        var d213 = $("#d213").val();
        var d214 = $("#d214").val();
        var d221 = $("#d221").val();
        var d222 = $("#d222").val();
        var d223 = $("#d223").val();
        var d224 = $("#d224").val();
        var d2flag = 0;
        var d2flag = judge(d211, d212, d213, d214, d221, d222, d223, d224, 500);
        if (d2flag === 0) {
            $("#d2").text("合格");
        } else {
            $("#d2").text("不合格");
        }


        var d3flag = 0;
        var d311 = $("#d311").val();
        var d312 = $("#d312").val();
        var d313 = $("#d313").val();
        var d314 = $("#d314").val();
        var d321 = $("#d321").val();
        var d322 = $("#d322").val();
        var d323 = $("#d323").val();
        var d324 = $("#d324").val();
        var d3flag = 0;
        var d3flag = judge(d311, d312, d313, d314, d321, d322, d323, d324, 500);
        if (d3flag === 0) {
            $("#d3").text("合格");
        } else {
            $("#d3").text("不合格");
        }

        var d411 = $("#d411").val();
        var d412 = $("#d412").val();
        var d413 = $("#d413").val();
        var d414 = $("#d414").val();
        var d421 = $("#d421").val();
        var d422 = $("#d422").val();
        var d423 = $("#d423").val();
        var d424 = $("#d424").val();
        var d4flag = judge(d411, d412, d413, d414, d421, d422, d423, d424, 400);
        if (d4flag === 0) {
            $("#d4").text("合格");
        } else {
            $("#d4").text("不合格");
        }

        var d511 = $("#d511").val();
        var d512 = $("#d512").val();
        var d513 = $("#d513").val();
        var d514 = $("#d514").val();
        var d521 = $("#d521").val();
        var d522 = $("#d522").val();
        var d523 = $("#d523").val();
        var d524 = $("#d524").val();
        var d5flag = judge(d511, d512, d513, d514, d521, d522, d523, d524, 45);
        if (d5flag === 0) {
            $("#d5").text("合格");
        } else {
            $("#d5").text("不合格");
        }

        var d611 = $("#d611").val();
        var d612 = $("#d612").val();
        var d613 = $("#d613").val();
        var d614 = $("#d614").val();
        var d621 = $("#d621").val();
        var d622 = $("#d622").val();
        var d623 = $("#d623").val();
        var d624 = $("#d624").val();
        var d6flag = judge(d611, d612, d613, d614, d621, d622, d623, d624, 45);
        if (d6flag === 0) {
            $("#d6").text("合格");
        } else {
            $("#d6").text("不合格");
        }

        var d711 = $("#d711").val();
        var d712 = $("#d712").val();
        var d713 = $("#d713").val();
        var d714 = $("#d714").val();
        var d721 = $("#d721").val();
        var d722 = $("#d722").val();
        var d723 = $("#d723").val();
        var d724 = $("#d724").val();
        var d7flag = judge(d711, d712, d713, d714, d721, d722, d723, d724, 10);
        if (d7flag === 0) {
            $("#d7").text("合格");
        } else {
            $("#d7").text("不合格");
        }

        var d811 = $("#d811").val();
        var d812 = $("#d812").val();
        var d813 = $("#d813").val();
        var d814 = $("#d814").val();
        var d821 = $("#d821").val();
        var d822 = $("#d822").val();
        var d823 = $("#d823").val();
        var d824 = $("#d824").val();
        var d8flag = judge(d811, d812, d813, d814, d821, d822, d823, d824, 50);
        if (d8flag === 0) {
            $("#d8").text("合格");
        } else {
            $("#d8").text("不合格");
        }

        var qualified = 0;
        var unqualified = 0;
        if (d1flag === 0) qualified++;
        else unqualified++;
        if (d2flag === 0) qualified++;
        else unqualified++;
        if (d3flag === 0) qualified++;
        else unqualified++;
        if (d4flag === 0) qualified++;
        else unqualified++;
        if (d5flag === 0) qualified++;
        else unqualified++;
        if (d6flag === 0) qualified++;
        else unqualified++;
        if (d7flag === 0) qualified++;
        else unqualified++;
        if (d8flag === 0) qualified++;
        else unqualified++;

        var PieData = [
            {
                name: "不合格",
                value: unqualified
            },
            {
                name: "合格",
                value: qualified
            }
        ];
        var myChartPie = echarts.init(document.getElementById("PieWaterQuality"));
        myChartPie.setOption({
            title: {
                text: '有轨电车竣工环境监测-废水',
                x: 'center',
                y: 5
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            series: [
                {
                    name: "Patch",
                    type: "pie",
                    radius: "55%",
                    center: ['50%', '55%'],
                    data: PieData,
                    label: {
                        show: true,
                        normal: {
                            formatter: function (params) {
                                var total = 0;
                                var percent = 0;
                                PieData.forEach(function (value) {
                                    total += value.value;
                                });
                                percent = ((params.value / total) * 100).toFixed(1);
                                return (
                                    params.name + ":" +
                                    params.value + "\n" +
                                    percent + "%"
                                );
                            }
                        }
                    },
                    labelLine: {
                        show: false,
                    }
                },
            ],
        });

    });
});