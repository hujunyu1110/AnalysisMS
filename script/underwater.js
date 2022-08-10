$(document).ready(function () {
    function judge(a1, a2, a3, jud) {
        var judflag = 0;
        if (a1 <= jud && a1 != "" && a1 != null) { } else { judflag++; }
        if (a2 <= jud && a2 != "" && a2 != null) { } else { judflag++; }
        if (a3 <= jud && a3 != "" && a3 != null) { } else { judflag++; }
        if (judflag === 0) {
            return 0;
        } else {
            return 1;
        }

    }
    $("#SummitBtn").click(function () {
        var d1flag = 0;
        var d11 = $("#d11").val();
        if (d11 > 6.5 && d11 <= 8.5) {
        } else {
            d1flag++
        }
        var d12 = $("#d12").val();
        if (d12 > 6.5 && d12 <= 8.5) {
        } else {
            d1flag++
        }
        var d13 = $("#d13").val();
        if (d13 > 6.5 && d13 <= 8.5) {
        } else {
            d1flag++
        }

        if (d1flag === 0) {
            $("#dd1").text("合格");
        } else {
            $("#dd1").text("不合格");
        }



        var d21 = $("#d21").val();
        var d22 = $("#d22").val();
        var d23 = $("#d23").val();
        var d2flag = 0;
        var d2flag = judge(d21, d22, d23, 450);
        if (d2flag === 0) {
            $("#dd2").text("合格");
        } else {
            $("#dd2").text("不合格");
        }


        var d3flag = 0;
        var d31 = $("#d31").val();
        var d32 = $("#d32").val();
        var d33 = $("#d33").val();
        var d3flag = 0;
        var d3flag = judge(d31, d32, d33, 1000);
        if (d3flag === 0) {
            $("#dd3").text("合格");
        } else {
            $("#dd3").text("不合格");
        }

        var d41 = $("#d41").val();
        var d42 = $("#d42").val();
        var d43 = $("#d43").val();
        var d4flag = judge(d41, d42, d43, 250);
        if (d4flag === 0) {
            $("#dd4").text("合格");
        } else {
            $("#d4d").text("不合格");
        }

        var d51 = $("#d51").val();
        var d52 = $("#d52").val();
        var d53 = $("#d53").val();
        var d5flag = judge(d51, d52, d53, 250);
        if (d5flag === 0) {
            $("#dd5").text("合格");
        } else {
            $("#dd5").text("不合格");
        }

        var d61 = $("#d61").val();
        var d62 = $("#d62").val();
        var d63 = $("#d63").val();
        var d6flag = judge(d61, d62, d63, 0.3);
        if (d6flag === 0) {
            $("#dd6").text("合格");
        } else {
            $("#dd6").text("不合格");
        }

        var d71 = $("#d71").val();
        var d72 = $("#d72").val();
        var d73 = $("#d73").val();
        var d7flag = judge(d71, d72, d73, 0.1);
        if (d7flag === 0) {
            $("#dd7").text("合格");
        } else {
            $("#dd7").text("不合格");
        }

        var d81 = $("#d81").val();
        var d82 = $("#d82").val();
        var d83 = $("#d83").val();
        var d8flag = judge(d81, d82, d83, 1);
        if (d8flag === 0) {
            $("#dd8").text("合格");
        } else {
            $("#dd8").text("不合格");
        }

        var d91 = $("#d91").val();
        var d92 = $("#d92").val();
        var d93 = $("#d93").val();
        var d9flag = judge(d91, d92, d93, 1);
        if (d9flag === 0) {
            $("#dd9").text("合格");
        } else {
            $("#dd9").text("不合格");
        }

        var d101 = $("#d101").val();
        var d102 = $("#d102").val();
        var d103 = $("#d103").val();
        var d10flag = judge(d101, d102, d103, 0.2);
        if (d10flag === 0) {
            $("#dd10").text("合格");
        } else {
            $("#dd10").text("不合格");
        }

        var d111 = $("#d111").val();
        var d112 = $("#d112").val();
        var d113 = $("#d113").val();
        var d11flag = judge(d111, d112, d113, 0.002);
        if (d11flag === 0) {
            $("#dd11").text("合格");
        } else {
            $("#dd11").text("不合格");
        }

        var d121 = $("#d121").val();
        var d122 = $("#d122").val();
        var d123 = $("#d123").val();
        var d12flag = judge(d121, d122, d123, 0.03);
        if (d12flag === 0) {
            $("#dd12").text("合格");
        } else {
            $("#dd12").text("不合格");
        }

        var d131 = $("#d131").val();
        var d132 = $("#d132").val();
        var d133 = $("#d133").val();
        var d13flag = judge(d131, d132, d133, 3);
        if (d13flag === 0) {
            $("#dd13").text("合格");
        } else {
            $("#dd13").text("不合格");
        }

        var d141 = $("#d141").val();
        var d142 = $("#d142").val();
        var d143 = $("#d143").val();
        var d14flag = judge(d141, d142, d143, 0.5);
        if (d14flag === 0) {
            $("#dd14").text("合格");
        } else {
            $("#dd14").text("不合格");
        }

        var d151 = $("#d151").val();
        var d152 = $("#d152").val();
        var d153 = $("#d153").val();
        var d15flag = judge(d151, d152, d153, 0.002);
        if (d15flag === 0) {
            $("#dd15").text("合格");
        } else {
            $("#dd15").text("不合格");
        }

        var d161 = $("#d161").val();
        var d162 = $("#d162").val();
        var d163 = $("#d163").val();
        var d16flag = judge(d161, d162, d163, 200);
        if (d16flag === 0) {
            $("#dd16").text("合格");
        } else {
            $("#dd16").text("不合格");
        }

        var d171 = $("#d171").val();
        var d172 = $("#d172").val();
        var d173 = $("#d173").val();
        var d17flag = judge(d171, d172, d173, 1);
        if (d17flag === 0) {
            $("#dd17").text("合格");
        } else {
            $("#dd17").text("不合格");
        }

        var d181 = $("#d181").val();
        var d182 = $("#d182").val();
        var d183 = $("#d183").val();
        var d18flag = judge(d181, d182, d183, 20);
        if (d18flag === 0) {
            $("#dd18").text("合格");
        } else {
            $("#dd18").text("不合格");
        }

        var d191 = $("#d191").val();
        var d192 = $("#d192").val();
        var d193 = $("#d193").val();
        var d19flag = judge(d191, d192, d193, 0.05);
        if (d19flag === 0) {
            $("#dd19").text("合格");
        } else {
            $("#dd19").text("不合格");
        }

        var d201 = $("#d201").val();
        var d202 = $("#d202").val();
        var d203 = $("#d203").val();
        var d20flag = judge(d201, d202, d203, 1);
        if (d20flag === 0) {
            $("#dd20").text("合格");
        } else {
            $("#dd20").text("不合格");
        }

        var d211 = $("#d211").val();
        var d212 = $("#d212").val();
        var d213 = $("#d213").val();
        var d21flag = judge(d211, d212, d213, 0.08);
        if (d21flag === 0) {
            $("#dd21").text("合格");
        } else {
            $("#dd21").text("不合格");
        }

        var d221 = $("#d221").val();
        var d222 = $("#d222").val();
        var d223 = $("#d223").val();
        var d22flag = judge(d221, d222, d223, 0.001);
        if (d22flag === 0) {
            $("#dd22").text("合格");
        } else {
            $("#dd22").text("不合格");
        }

        var d231 = $("#d231").val();
        var d232 = $("#d232").val();
        var d233 = $("#d233").val();
        var d23flag = judge(d231, d232, d233, 0.01);
        if (d23flag === 0) {
            $("#dd23").text("合格");
        } else {
            $("#dd23").text("不合格");
        }

        var d241 = $("#d241").val();
        var d242 = $("#d242").val();
        var d243 = $("#d243").val();
        var d24flag = judge(d241, d242, d243, 0.01);
        if (d24flag === 0) {
            $("#dd24").text("合格");
        } else {
            $("#dd24").text("不合格");
        }

        var d251 = $("#d251").val();
        var d252 = $("#d252").val();
        var d253 = $("#d253").val();
        var d25flag = judge(d251, d252, d253, 0.005);
        if (d25flag === 0) {
            $("#dd25").text("合格");
        } else {
            $("#dd25").text("不合格");
        }

        var d261 = $("#d261").val();
        var d262 = $("#d262").val();
        var d263 = $("#d263").val();
        var d26flag = judge(d261, d262, d263, 0.05);
        if (d26flag === 0) {
            $("#dd26").text("合格");
        } else {
            $("#dd26").text("不合格");
        }

        var d271 = $("#d271").val();
        var d272 = $("#d273").val();
        var d273 = $("#d273").val();
        var d27flag = judge(d271, d272, d273, 0.01);
        if (d27flag === 0) {
            $("#dd27").text("合格");
        } else {
            $("#dd27").text("不合格");
        }

        var d281 = $("#d281").val();
        var d282 = $("#d282").val();
        var d283 = $("#d283").val();
        var d28flag = judge(d281, d282, d283, 60);
        if (d28flag === 0) {
            $("#dd28").text("合格");
        } else {
            $("#dd28").text("不合格");
        }

        var d291 = $("#d291").val();
        var d292 = $("#d292").val();
        var d293 = $("#d293").val();
        var d29flag = judge(d291, d292, d293, 2);
        if (d29flag === 0) {
            $("#dd29").text("合格");
        } else {
            $("#dd29").text("不合格");
        }

        var d301 = $("#d301").val();
        var d302 = $("#d302").val();
        var d303 = $("#d303").val();
        var d30flag = judge(d301, d302, d303, 10);
        if (d30flag === 0) {
            $("#dd30").text("合格");
        } else {
            $("#dd30").text("不合格");
        }

        var d311 = $("#d311").val();
        var d312 = $("#d312").val();
        var d313 = $("#d313").val();
        var d31flag = judge(d311, d312, d313, 700);
        if (d31flag === 0) {
            $("#dd31").text("合格");
        } else {
            $("#dd31").text("不合格");
        }

        var d321 = $("#d321").val();
        var d322 = $("#d322").val();
        var d323 = $("#d323").val();
        var d32flag = judge(d321, d322, d323, 3);
        if (d32flag === 0) {
            $("#dd32").text("合格");
        } else {
            $("#dd32").text("不合格");
        }

        var d331 = $("#d331").val();
        var d332 = $("#d332").val();
        var d333 = $("#d333").val();
        var d33flag = judge(d331, d332, d333, 100);
        if (d33flag === 0) {
            $("#dd33").text("合格");
        } else {
            $("#dd33").text("不合格");
        }

        var d341 = $("#d341").val();
        var d342 = $("#d342").val();
        var d343 = $("#d343").val();
        var d34flag = judge(d341, d342, d343, 0.5);
        if (d34flag === 0) {
            $("#dd34").text("合格");
        } else {
            $("#dd34").text("不合格");
        }

        var d351 = $("#d351").val();
        var d352 = $("#d352").val();
        var d353 = $("#d353").val();
        var d35flag = judge(d351, d352, d353, 1);
        if (d35flag === 0) {
            $("#dd35").text("合格");
        } else {
            $("#dd35").text("不合格");
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

        if (d9flag === 0) qualified++;
        else unqualified++;
        if (d10flag === 0) qualified++;
        else unqualified++;
        if (d11flag === 0) qualified++;
        else unqualified++;
        if (d12flag === 0) qualified++;
        else unqualified++;
        if (d13flag === 0) qualified++;
        else unqualified++;
        if (d14flag === 0) qualified++;
        else unqualified++;
        if (d15flag === 0) qualified++;
        else unqualified++;
        if (d16flag === 0) qualified++;
        else unqualified++;
        if (d17flag === 0) qualified++;
        else unqualified++;
        if (d18flag === 0) qualified++;
        else unqualified++;
        if (d19flag === 0) qualified++;
        else unqualified++;
        if (d20flag === 0) qualified++;
        else unqualified++;
        if (d21flag === 0) qualified++;
        else unqualified++;
        if (d22flag === 0) qualified++;
        else unqualified++;
        if (d23flag === 0) qualified++;
        else unqualified++;
        if (d24flag === 0) qualified++;
        else unqualified++;
        if (d25flag === 0) qualified++;
        else unqualified++;
        if (d26flag === 0) qualified++;
        else unqualified++;
        if (d27flag === 0) qualified++;
        else unqualified++;
        if (d28flag === 0) qualified++;
        else unqualified++;
        if (d29flag === 0) qualified++;
        else unqualified++;
        if (d30flag === 0) qualified++;
        else unqualified++;
        if (d31flag === 0) qualified++;
        else unqualified++;
        if (d32flag === 0) qualified++;
        else unqualified++;
        if (d33flag === 0) qualified++;
        else unqualified++;
        if (d34flag === 0) qualified++;
        else unqualified++;
        if (d35flag === 0) qualified++;
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
                text: '地下水环境监测分析',
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