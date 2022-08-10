$(document).ready(function () {
    function judge(el) {
        var stan = $("#s" + el + " option:selected").val();
        var stany = 0;
        var stanz = 0;
        if (stan === "a") {
            stanz = 70;
            stany = 67;
        }
        if (stan === "b") {
            stanz = 75;
            stany = 72;
        }
        if (stan === "c") {
            stanz = 80;
            stany = 80;
        }
        var flage = 0;
        var d1 = $("#z" + el).val();
        var d2 = $("#y" + el).val();
        if (d1 <= stanz && d1 != null && d1 != "") { }
        else {
            flage++;
        }
        if (d2 <= stany && d2 != null && d2 != "") { }
        else {
            flage++;
        }
        if (flage === 0) $("#d" + el).text("合格");
        else $("#d" + el).text("不合格");
        return flage;
    }
    $("#SummitBtn").click(function () {


        var qualified = 0;
        var unqualified = 0;
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
                text: '有轨电车竣工环境监测-振动',
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