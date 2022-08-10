$(document).ready(function () {
    function judge(el) {
        var stan = $("#s" + el + " option:selected").val();
        var stany = 0;
        var stanz = 0;
        if (stan === "a") {
            stanz = 55;
            stany = 45;
        }
        if (stan === "b") {
            stanz = 50;
            stany = 50;
        }
        if (stan === "c") {
            stanz = 65;
            stany = 55;
        }
        if (stan === "d") {
            stanz = 70;
            stany = 55;
        }
        if (stan === "e") {
            stanz = 70;
            stany = 55;
        }
        var flage = 0;
        var d1 = $("#z" + el + "1").val();
        var d2 = $("#y" + el + "1").val();
        var d3 = $("#z" + el + "2").val();
        var d4 = $("#y" + el + "2").val();
        if (d1 <= stanz && d1 != null && d1 != "") $("#zz" + el + "1").text("合格");
        else { $("#zz" + el + "1").text("不合格"); flage++; }
        if (d2 <= stany && d2 != null && d2 != "") $("#zy" + el + "1").text("合格");
        else {
            $("#zy" + el + "1").text("不合格");
            flage++;
        }
        if (d3 <= stanz && d3 != null && d3 != "") $("#zz" + el + "2").text("合格");
        else {
            $("#zz" + el + "2").text("不合格"); flage++;
        }
        if (d4 <= stany && d4 != null && d4 != "") $("#zy" + el + "2").text("合格");
        else {
            $("#zy" + el + "2").text("不合格"); flage++;
        }
        if (flage === 0) $("#dd" + el).text("合格");
        else $("#dd" + el).text("不合格");
        return flage;
    }

    $("#SummitBtn").click(function () {

        var qualified = 0;
        var unqualified = 0;;
        if (judge("1") === 0) qualified++;
        else unqualified++;
        if (judge("2") === 0) qualified++;
        else unqualified++;
        if (judge("3") === 0) qualified++;
        else unqualified++;
        if (judge("4") === 0) qualified++;
        else unqualified++;
        if (judge("5") === 0) qualified++;
        else unqualified++;
        if (judge("6") === 0) qualified++;
        else unqualified++;
        if (judge("7") === 0) qualified++;
        else unqualified++;
        if (judge("8") === 0) qualified++;
        else unqualified++;
        if (judge("9") === 0) qualified++;
        else unqualified++;
        if (judge("10") === 0) qualified++;
        else unqualified++;
        if (judge("11") === 0) qualified++;
        else unqualified++;
        if (judge("12") === 0) qualified++;
        else unqualified++;
        if (judge("13") === 0) qualified++;
        else unqualified++;
        if (judge("14") === 0) qualified++;
        else unqualified++;
        if (judge("15") === 0) qualified++;
        else unqualified++;
        if (judge("16") === 0) qualified++;
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
                text: '有轨电车竣工环境监测-噪音',
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