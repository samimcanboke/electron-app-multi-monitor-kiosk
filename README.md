# electron-app-multi-monitor-kiosk
# EN
This application shows you how to use your application developed on electronJS in a dual monitor system. Kiosk mode will provide you with the comfort of working in full screen mode of your application by blocking other applications and entries.

You can find the resolution values of your screens with the getAllDisplays method in the screen class. The secondary monitor you need
is the initial value. You can reach this value with the bounds property from the screen properties. If you start your BrowserWindow that you want to run on the secondary screen by adding + 100 pixels to these values, it will open on the secondary screen.

# TR 

Bu uygulama size electronJS üzerinde geliştirdiğiniz uygulamanızı çift monitör sisteminde nasıl kullanacağınızı göstermektedir. Kiosk modu size uygulamanızın tam ekran modunda diğer uygulama ve girişleri engelleyecek şekilde çalışma konforunu sağlayacaktır. 

screen sınıfında bulunan getAllDisplays methodu ile ekranlarınızın çözünürlük değerlerini bulabilirsiniz. İhtiyacınız olan ikincil monitörünüzün
başlangıç değeridir. Bu değere gelen ekran özelliklerinden bounds özelliği ile ulaşabilirsiniz. İkincil ekranında çalışmasını istediğiniz BrowserWindow 'unuzu bu değerlere + 100 piksel ekleyerek başlatırsanız ikincil ekranda açılacaktır.

