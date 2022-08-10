$(document).ready(function () {
    function judge(a1, a2, a3, a4, a5, a6, jud) {
        var judflag = 0;
        if (a1 <= jud && a1 != "" && a1 != null) { } else { judflag++; }
        if (a2 <= jud && a2 != "" && a2 != null) { } else { judflag++; }
        if (a3 <= jud && a3 != "" && a3 != null) { } else { judflag++; }
        if (a4 <= jud && a4 != "" && a4 != null) { } else { judflag++; }
        if (a5 <= jud && a5 != "" && a5 != null) { } else { judflag++; }
        if (a6 <= jud && a6 != "" && a6 != null) { } else { judflag++; }
        if (judflag === 0) {
            return 0;
        } else {
            return 1;
        }

    }
    $("#SummitBtn").click(function () {

        var d111 = $("#d11").val();
        var d112 = $("#d12").val();
        var d113 = $("#d13").val();
        var d114 = $("#d14").val();
        var d115 = $("#d15").val();
        var d116 = $("#d16").val();
        var d1flag = 0;
        var d1flag = judge(d111, d112, d113, d114, d115, d116, 5);
        if (d1flag === 0) {
            $("#d1").text("合格");
        } else {
            $("#d1").text("不合格");
        }


        var d211 = $("#d21").val();
        var d212 = $("#d22").val();
        var d213 = $("#d23").val();
        var d214 = $("#d24").val();
        var d221 = $("#d25").val();
        var d222 = $("#d26").val();
        var d2flag = 0;
        var d2flag = judge(d211, d212, d213, d214, d221, d222, 10);
        if (d2flag === 0) {
            $("#d2").text("合格");
        } else {
            $("#d2").text("不合格");
        }


        var d311 = $("#d31").val();
        var d312 = $("#d32").val();
        var d313 = $("#d33").val();
        var d314 = $("#d34").val();
        var d321 = $("#d35").val();
        var d322 = $("#d36").val();
        var d3flag = 0;
        var d3flag = judge(d311, d312, d313, d314, d321, d322, 30);
        if (d3flag === 0) {
            $("#d3").text("合格");
        } else {
            $("#d3").text("不合格");
        }

        var d411 = $("#d41").val();
        var d412 = $("#d42").val();
        var d413 = $("#d43").val();
        var d414 = $("#d44").val();
        var d421 = $("#d45").val();
        var d422 = $("#d46").val();
        var d4flag = judge(d411, d412, d413, d414, d421, d422, 0.5);
        if (d4flag === 0) {
            $("#d4").text("合格");
        } else {
            $("#d4").text("不合格");
        }

        var d511 = $("#d51").val();
        var d512 = $("#d52").val();
        var d513 = $("#d53").val();
        var d514 = $("#d54").val();
        var d521 = $("#d55").val();
        var d522 = $("#d56").val();
        var d5flag = judge(d511, d512, d513, d514, d521, d522, 1);
        if (d5flag === 0) {
            $("#d5").text("合格");
        } else {
            $("#d5").text("不合格");
        }

        var d611 = $("#d61").val();
        var d612 = $("#d62").val();
        var d613 = $("#d63").val();
        var d614 = $("#d64").val();
        var d621 = $("#d65").val();
        var d622 = $("#d66").val();
        var d6flag = judge(d611, d612, d613, d614, d621, d622, 1.0);
        if (d6flag === 0) {
            $("#d6").text("合格");
        } else {
            $("#d6").text("不合格");
        }

        var d711 = $("#d71").val();
        var d712 = $("#d72").val();
        var d713 = $("#d73").val();
        var d714 = $("#d74").val();
        var d721 = $("#d75").val();
        var d722 = $("#d76").val();
        var d7flag = judge(d711, d712, d713, d714, d721, d722, 5.0);
        if (d7flag === 0) {
            $("#d7").text("合格");
        } else {
            $("#d7").text("不合格");
        }

        var d811 = $("#d81").val();
        var d812 = $("#d82").val();
        var d813 = $("#d83").val();
        var d814 = $("#d84").val();
        var d821 = $("#d85").val();
        var d822 = $("#d86").val();
        var d8flag = judge(d811, d812, d813, d814, d821, d822, 10.0);
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
                text: '有轨电车竣工环境监测-废气',
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