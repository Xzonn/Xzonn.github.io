---
date: 2018-06-23 12:00
infobox: complete formula
last_modified_at: 2020-01-03 23:02
math: true
tags: 物理 知识点整理
title: 《普通物理·光学》知识点整理
---
### 第1章 导言
* 几何光学：以光的直线传播为基础，研究光在透明介质中的传播问题（直线传播、独立传播、折射反射）。
* 波动光学：以光的波动性为基础，研究光的传播及其规律（干涉、衍射、偏振）。
* 量子光学：以光和物质相互作用时所显示出的粒子性为基础，来研究光的一系列规律。
* 惠更斯原理导出折射定律：$\cfrac{\sin \theta\_1}{\sin \theta\_2} = \cfrac {v\_1}{v\_2} = \cfrac {n\_2}{n\_1}$。折射率：$n = \cfrac cv$。
* 光强：光的平均能流密度，$I = \cfrac 12 \sqrt{\cfrac {\varepsilon\_0 \varepsilon\_r}{\mu\_0 \mu\_r}} E\_0^2$，即与振幅平方成正比。

### 第2章 光的干涉
#### 2.1 波的叠加原理
* 若两列波同时存在时$U(P, t) = U\_1(P, t) + U\_2(P, t)$则满足波的叠加原理，否则叠加原理不成立。在高光强，非线性光学介质中叠加原理不成立。
* 光的干涉：同频、同方向两列波叠加，在两列波的重叠区域内形成稳定的强度周期性分布，$U\_1(P, t) = A\_1\cos\left[\omega t - \cfrac {2\pi r\_1} \lambda + \varphi\_1\right]$，$U\_2(P, t) = A\_2\cos\left[\omega t - \cfrac {2\pi r\_2} \lambda + \varphi\_2\right]$，合振振动振幅满足$A^2 = A\_1^2 + A\_2^2 + 2A\_1A\_2\cos \delta$，其中$\delta = \cfrac {2\pi} \lambda (r\_2 - r\_1) - (\varphi\_2 - \varphi\_1)$。
* 光程：媒质折射率与光的几何路程之积，可认为是在相等时间内光在真空中的路程。$\Delta = ns = ct$。介质中的波长$\lambda' = \cfrac \lambda n$，波程差$\Delta r = r\_2 - r\_1$，相位差$\delta = 2\pi \left(\cfrac tT - \cfrac {r\_2}{\lambda'}\right) - 2\pi \left(\cfrac tT - \cfrac {r\_1} \lambda \right) = -2\pi\left(\cfrac {nr\_2 - r\_1} \lambda \right) = 2\pi\cfrac \Delta \lambda$，其中光程差$\Delta = nr\_2 - r\_1$。
* 相干叠加：能够形成干涉的叠加。必要条件：两列波频率相同、振动方向相同、具有稳定的相位关系。满足此条件的波源称为相干波源。普通光源原子发光是断续的，每次发光形成一长度有限的波列，各原子各次发光相互独立，各波列互不相干。
* 相干叠加$I(P) = I\_1(P) + I\_2(P) + \Delta I(P)$，交叠区出现明暗相间的条纹，$\Delta I(P)$是空间函数（干涉项），使得光强在空间有一定的分布。
* 相干光的产生：分振幅干涉（利用光的反射和折射将同一光束分割成振幅较小的两束相干光）、分波前干涉（从同一波面上的不同部分产生次级波相干）。

#### 2.2 杨氏干涉实验
* $\delta = \-2\pi\cfrac \Delta\lambda$，其中$\Delta = r\_2 - r\_1 \approx d\sin\theta \approx \cfrac dD x$。明文$x = \cfrac Dd k\lambda$，暗纹$x = \cfrac Dd(k + \frac 12)\lambda$，$k$为干涉级次。相邻条纹间距$\Delta x = \cfrac Ds\lambda$。干涉强度分布$I = 2I\_0\left(1 + \cos \cfrac {2\pi}\lambda\Delta\right) = 4I\_0\cos^2\left(\cfrac {\pi d}{\lambda D}x\right)$。
* 若小孔不在对称轴上，而是横向移动$\varepsilon$，则$\delta \approx \cfrac {2\pi} \lambda\left(\cfrac dR \varepsilon + \cfrac dDx\right)$。零级条纹沿$\varepsilon$的反方向移动$\cfrac DR\varepsilon$。条纹间距不变。干涉强度分布$I = 4I\_0\cos^2\left[\cfrac{\pi d}{\lambda D}\left(x + \cfrac DR \varepsilon\right)\right]$。
* 光源宽度对干涉条纹的影响：干涉条纹的衬比度$\gamma = \cfrac {I\_{\text{max}} - I\_{\text{min}}} {I\_{\text{max}} + I\_{\text{min}}}$。当光源的宽度$b < \lambda\cfrac Rd$才能产生干涉条纹。
* 其它分波前干涉装置：菲涅尔双面镜，菲涅尔双棱镜，劳埃德镜。

#### 2.3 薄膜干涉
* 指拓展光源投射到透明薄膜上，其反射光或透射光的干涉，分为等倾干涉和等厚干涉。
* 薄膜干涉的光程差公式：$\Delta = \cfrac {2nh}{\cos \theta} - 2nh\sin\theta\tan\theta = 2nh\cos \theta$。其中$n$为薄膜折射率，$h$为厚度，$\theta$是光入射到膜处膜内的折射角。当光在情况不同的两界面反射时，反射光之间存在半波损失，$\Delta = 2nh\cos \theta + \cfrac \lambda 2$。
* 干涉条纹的定域问题：点光源照明时存在干涉的区域是整个空间，干涉是非定域的。用拓展光源时，在空间某些特定区域产生干涉条纹，即干涉条纹定域在此区域内。
* 等倾干涉：薄膜的折射率和厚度都相同，光程差之和折射角有关。干涉条纹为一系列的同心圆。膜的厚度$h$一定时，越靠近中心处折射角越小，对应的入射角小，光程差大，条纹级次高。相邻条纹的光程差为$\lambda$，则$\mathrm d\Delta = -2nh\sin\theta\mathrm d\theta = \lambda$，$\mathrm d\theta = \theta\_{k + 1} - \theta\_k = -\cfrac \lambda{2nh\sin\theta}$。干涉条纹的移动可根据光程差不变的点如何移动来判断，当厚度增大时条纹外移，厚度减小时条纹内移。
* 等厚干涉：薄膜的厚度不均匀，通常使单色光垂直照射到薄膜上，入射角和折射角都近似为零，光程差仅随薄膜厚度变化。$\Delta = 2nh \pm \cfrac \lambda 2$。干涉条纹是薄膜厚度相同点的轨迹。薄膜厚的地方光程差大级次高。对于劈尖形薄膜，从劈棱到底边干涉条纹的级次依次增高。相邻条纹的光程差为$\lambda$，则$\mathrm d\Delta = 2n\mathrm dh = \lambda$，$\mathrm dh = \cfrac \lambda{2n}$。若劈角为$\alpha$，则相邻条纹间距$l = \cfrac {\mathrm dh}{\tan\alpha} = \cfrac \lambda {2n\alpha}$。劈角越大，干涉条纹约稀疏；劈角变大，条纹向薄处移动。
* 牛顿环：一系列亮暗相间的同心圆。$R^2 = r^2 + (R-h)^2$，近似得$r^2 = 2Rh$，则亮条纹半径$r = \sqrt{(k + \frac 12)R\lambda}$。可以测量平凸透镜的曲率半径，$r\_{k+m}^2 - r\_k^2 = mR\lambda$。检验透镜球表面质量。
* 应用：检查工件表面的平整度；测定涉及长度的一些量。
* 增透膜：消除或减少光的反射。完全消除反射要求$n\_f = \sqrt{nn\_g}$。要达到较高的反射率需要采用多层膜。

#### 2.4 迈克尔孙干涉仪
* 特点：光源、两个反射镜、接收器完全分开，便于在光路中安插其它器件。实质是薄膜干涉，两镜面平行形成等厚空气层，可以产生等倾条纹。空气薄膜无半波损失。
* 调节其中一个反射镜的角度，可以形成一个楔形空气层。改变劈尖的厚度产生各种等厚干涉。
* 迈克尔孙－莫雷实验：探测地球相对绝对惯性系“以太系”的速度。

### 第3章 光的衍射
#### 3.1 衍射现象
* 光在传播过程中，如果遇到障碍物，其传播方向会发生变绕过障碍物的边缘而继续前进，这种现象称为衍射现象。衍射现象是波动性的另一重要表现。
* 衍射现象的一般特点：缝较大时，光是直线传播的。缝很小时，衍射现象明显。当障碍物的线度接近光的波长，衍射现象尤其显著。光孔线度$\rho$与光波长$\lambda$的比决定了衍射效应的强弱。
  * $\rho > 10^3\lambda$，衍射效应很弱，光近乎直线传播；便捷效应不可忽略。
  * $\lambda \le \rho < 10^3\lambda$，衍射效应显著，光孔形状与衍射图样对应。
  * $\rho \le \lambda$，衍射效应过于强烈，向散射过渡。
* 菲涅尔衍射：光源、衍射屏和接收屏三者之间距离为有限远，或其中之一为有限远。近场衍射。
* 夫琅禾费衍射：光源、衍射屏和接收屏三者之间距离均为无限远。夫琅禾费衍射是远场衍射，计算容易，应用价值大。
* 惠更斯原理：波到达的任意点都可以看作新的振动中心，它们发出球面波，这些次波的包络面就是新的波面。不足：只认识到波的振动传播特性，没有对光波振幅、相位等的描述。
* 菲涅尔在惠更斯原理基础上加以补充，给出相位和振幅的定量描述，提出相干叠加的概念：波前上的每个面元可以看成次波源，它们向四周发射次波；波场中任一场点的扰动是所有次波源所贡献的次级扰动的相干叠加。是研究衍射现象的理论基础。

#### 3.2 夫琅禾费单缝衍射
* 点光源$S$放在透镜$L\_1$的焦点上，形成平行光垂直照射单缝，右边为透镜$L\_2$和放在$L\_2$的焦面上的接受屏。透镜不引起附加的光程差。
* 强度分布公式：单缝宽度为$b$，从$B$到$C$发出的次波传播到$P$点的相位差逐点增加，$BC$两点的相位差为$\delta = \cfrac {2\pi}\lambda \Delta = \cfrac {2\pi}\lambda b\sin\theta$，其中$\theta$称为衍射角。
* 矢量图解法：把狭缝$BC$分成$N$等份，光程差$\overline{BDP} = \overline{NEP}$，所以由$B$到$C$，每点附加的光程差$\Delta l =\Delta b\sin\theta$，各狭条发出的次波在$P$点的相干叠加相当于一系列小矢量首尾相接的和，矢量方向依次相差$\cfrac {2\pi}\lambda\Delta b\sin\theta$的角度。$A = A\_0\cfrac {\sin\beta}\beta$，$I = I\_0 \cfrac{\sin^2\beta}{\beta^2}$。$I\_0$为接受屏中央的强度，$\beta = \cfrac \delta2 = \cfrac {\pi b\sin\theta}\lambda$。
* 强度分布：最大值$I\_0$分布在几何光学像点，$\theta = 0$。零点的位置$\cfrac \pi \lambda b\sin\theta = k\pi$，即$b \sin\theta = k\lambda$，衍射强度$I(\theta) = 0$，出现暗纹。次级大位置$\cfrac{\mathrm d}{\mathrm d\beta}\left(\cfrac{\sin\beta}\beta\right) = 0$，即$\beta = \tan\beta$时出现次级大。半角宽度$\Delta \theta\_0$：第一个极小值位置到中心所张的衍射角。

#### 3.3 夫琅禾费圆孔衍射
* 夫琅禾费圆孔衍射：圆孔半径为$a$，中央产生爱里斑。
* 成像光学仪器所成的像是一个爱里斑。当两个相斑重叠到一定程度就无法分辨。此时两个物点满足瑞利判据，$\theta = \cfrac {d/2}f = 1.22\cfrac \lambda D$。
* 望远镜的角放大倍数$M = \cfrac \beta \alpha = \cfrac {f\_o}{f\_e}$。$\Delta\theta\_m$放大$M$倍时应恰好等于人眼的最小分辨角$\Delta\theta\_e$，此时的角放大率称为有效放大率，即$M\_{\text{eff}} = \cfrac {D\_o}{D\_e}$。

#### 3.4 衍射光栅
* 光栅：具有空间周期性的衍射屏。光栅衍射图样是单缝衍射和多缝干涉的综合结果。$I = I\_0 \cfrac {\sin^2 \beta}{\beta^2} \cfrac {\sin^2 N\gamma}{\sin^2 \gamma}$，其中$\cfrac {\sin^2 \beta}{\beta^2}$为衍射因子，$\cfrac {\sin^2 N\gamma}{\sin^2 \gamma}$是干涉因子。
* 强度分布讨论：
  * 主极大位置$\gamma = \cfrac {\pi d}\lambda \sin \theta = k\pi$，出现主极大，此时$\cfrac {\sin^2 N\gamma}{\sin^2 \gamma} = N^2$。主极大半角宽度$\Delta \theta\_k = \cfrac \lambda {D\cos \theta\_k}$。两个主极大之间有$N - 2$个次级大。
  * 衍射因子的作用：决定了入射光功率在主极大之间的分配，在某些特殊情况下，可能使个别主极大消失——缺级。
* 色散现象：如果入射光包含几种不同波长的光，则当光栅常量$d$一定时，除零级外谱线对应的衍射角$\theta$随波长$\lambda$增大而增大。
* 闪耀光栅：把单槽衍射零级方向变成槽间干涉非零级，产生高衍射效率的色散。闪耀光栅仅有一列光谱。

#### 3.4 X射线衍射
* X射线是一种电磁波，波长很短，穿透力很强。劳厄用晶体作为$X$射线的天然三位光栅，每个微粒都是散射子波的波源，这些子波的干涉加强形成了斑点。

#### 3.5 全息照相
* 全息照相是无透镜的两步成像技术：光波干涉实现物光的全息记录；光波衍射实现物光的再现。
* 全息照片具有可分割特性，不怕撕毁。

#### 3.6 相衬显微镜
* 将相位分布转化为光强分布。原理：依靠装在物镜内的相位板，使照射物体点的直射光与衍射光发生干涉，使相位差转换成振幅差（明暗差别），从而使人们可以观察无色透明的标本。
* 通过加相板，使直射光束中引入$\pm \frac \pi 2$的相位差。正相板$I = I\_0(1-\varphi)^2$，亮背景暗物。负相板$I = I\_0(1+\varphi)^2$，亮物暗背景。

### 第4章 光的偏振
#### 4.1 光的偏振态
* 偏振：横波对于传播方向的轴来说不具备对称性的性质。光的偏振证实了光的横波性。
* 线偏振光：光的振动方向始终在一个平面内，也叫平面偏振光。
* 自然光：在垂直传播方向的平面内，各个方向的光振动全有，各个振动方向的强度相等。在实际应用中将一束自然光可分解为两束振动方向相互垂直的、等幅的、无固定相位关系的线偏振光。对自然光，各光矢量间没有固定的位相关系，任意两个取向不同的光矢量不能合成一个光矢量。普通光源如太阳、烛焰、灯泡发出的光都是自然光。
* 部分偏振光：介于线偏振光和自然光之间。光波中不同方向上的光振动振幅不等，在某一方向上振幅最大，而与之垂直的方向上的振幅最小。部分偏振光两垂直方向光振动之间无固定的相位差。部分偏振光可分解为两束振动方向相互垂直的、不等幅的、无固定相位关系线偏振光。
* 圆偏振光和椭圆偏振光：迎着光观察，光矢量向左或向右匀速旋转光矢量大小不变，为圆偏振光；光矢量大小变化，为椭圆偏振光。按旋转的方向分为左旋和右旋。右旋对应顺时针方向，左旋对应逆时针方向。圆偏振光和椭圆偏振光可以看成是两个同频、振动方向相互垂直，井且有稳定的相位关系的线偏振光合成的结果。反之，任何一个圆偏振光和椭圆偏振光可以分解成两个同频、振动方向相互垂直，井且有稳定的相位关系的线偏振光。

#### 4.2 起偏振器和检偏振器
* 某些晶体，如电气石，存在一个方向，光矢量与之平行入射时被吸收很少；与之垂直入射时则被强烈的吸收。晶体的这一性质称为二向色性，相应的方向称为偏振化方向或透光轴。自然光通过这种晶体薄片后，成为线偏振光，振动方向与偏振片的偏振化方向一致。
* 马吕斯定律：强度为$I\_0$的偏振光，通过检偏器后，透射光的强度为：$I = I\_0 \cos^2\alpha$。自然光透过偏振片变成线性偏振光，在忽略界面的反射时，光强减为一半，线偏振光的振动面与偏振片偏振化方向一致。
* 利用偏振片，可以区分线偏振光、自然光和部分偏振光。起偏振器其实就是检偏振器。
  * 自然光通过起偏器后成为偏振光，这时旋转偏振片就可得到不同方向的偏振光。可是人眼对光振动的方向不敏感，无论怎样旋转偏振片，都感觉不到光强的变化。
  * 如果入射的是线偏振光，若偏振化方向与线偏振光的振动方向成$90^\circ$角，则线偏振光将完全不能通过。因此，当转动偏振片时，在视场中就可看到光强的明显变化，井有消光现象。
  * 如果入射的是部分偏振光，则转动偏振片时，视场中光强有变化，但不十分明显，无消光现象。

#### 4.3 反射和折射时的偏振
* 自然光在两种各向同性介质分界面上反射、折射时，光的偏振状态要改变，反射光和折射光都是部分偏振光。相对入射面，反射光中垂直振动多于平行振动，折射光中平行振动多于垂直振动。
* 当入射角等于某一特定角度$i\_B$时，反射光为线偏振光，其振动方向与入射面垂直。该角称为布儒斯特角或起偏振角。布儒斯特角与折射角之和为$90^\circ$，$\tan i\_B = \cfrac {n\_2}{n\_1}$。
* 为了增加反射光的偏振化程度，可采用玻璃片堆的办法。作用：在拍摄玻璃窗内的物体时，去掉反射光的干扰。

#### 4.4 双折射现象
* 双折射：光束射向各向异性晶体中时将分裂成两束沿不同方向折射的光束。其中一束遵循折射定律，称为寻常光（$\mathrm o$光），另一束不遵循折射定律，称为非常光（$\mathrm e$光）。
* 光轴：光线在晶体中沿某一方向传播时不发生双折射现象，这一方向称为晶体的光轴。
  * 主截面：光轴与晶体表面光入射点的法线组成的平面。
  * 主平面：晶体中光的传播方向与晶体光轴构成的平面。实验表明$\mathrm o$光振动方向垂直于$\mathrm o$光主平面，$\mathrm e$光振动方向平行于$\mathrm e$光主平面。
  * 当入射面与主截面一致时，$\mathrm o$光和$\mathrm e$光都在入射面内，$\mathrm o$光主平面、$\mathrm e$光主平面和主截面三者重合，$\mathrm o$光和$\mathrm e$光严格垂直。
* 惠更斯作图法：
* 单轴晶体中的波面：各项异性介质中光在晶体中有两个速度，$\mathrm o$光各向传播速度相同，波面为球面；$\mathrm e$光各向传播速度不同，波面为回转椭球面，两波面相切于光轴。$v\_{\mathrm o}$和$v\_{\mathrm e}$是晶体的主速度，$n\_{\mathrm o}$和$n\_{\mathrm e}$是晶体的主折射率。
  * 正晶体：$n\_{\mathrm o} < n\_{\mathrm e}$，椭球面内切于球面。负晶体：$n\_{\mathrm o} > n\_{\mathrm e}$，椭球面外切于球面。
  * 惠更斯作图法要点：根据给定情况作出光在介质$1$中的波面$AB$，在$A$点作光在介质$2$中的次波面，半径满足$\cfrac R {\overline{BC}} = \cfrac {n\_1}{n\_2}$。由$C$作次波面的共切面$DC$即为折射波波面。由$A$通过切点$D$作直线$AD$即为折射光线。
  * 平行光垂直入射，光轴在入射平面内且平行于晶体表面，出射光沿同方向传播，具有相互垂直的偏振方向，但速度不同，仍为双折射。
  * 平行光垂直入射，光轴在入射平面内且与晶体表面斜交，出射光偏振方向相互垂直且有一定夹角。

#### 4.5 波片
* 波片：也叫作相位延迟器，是一种重要的光学器件。用单轴晶体制成的有确定厚度的薄片，光轴与薄片表面平行。波片内的$\mathrm o$光和$\mathrm e$光透射出波片后，产生确定的相位差和光程差。
* 原理分析：线偏振光垂直入射波片，垂直光轴的振动成为$\mathrm o$光，平行光轴的振动成为$\mathrm e$光，通过波片后相位差$\Delta \varphi = \varphi\_y - \varphi\_x = \cfrac {2\pi} \lambda (n\_{\mathrm o} - n\_{\mathrm e}) d$。
* 分类：
  * 全波片：$\Delta \varphi = 2k\pi$，即$d = \cfrac {k\lambda} {n\_{\mathrm o} - n\_{\mathrm e}}$，入射偏振光通过全波片后不改变偏振态。
  * 半波片：$\Delta \varphi = (2k + 1)\pi$，入射偏振光通过半波片后仍为线偏振光，但改变象限。
  * 四分之一波片：$\Delta \varphi = (2k + \frac 12)\pi$，线偏振光通过后变为椭圆偏振光或圆偏振光，椭圆偏振光和圆偏振光通过后变为线偏振光。
* 偏振光的干涉：如果在波片后再放置一块偏振片，把振动方向引到同一方向，就能产生偏振光的干涉。
  * 两个偏振片的偏振化方向互相垂直：$\mathrm o$光和$\mathrm e$光透过第二块偏振片后振幅均为$A\_1 \cos\alpha \sin\alpha$，相位差$\Delta\varphi = \cfrac {2\pi} \lambda (n\_{\mathrm o} - n\_{\mathrm e}) d + \pi$。正交偏振片之间旋转波片一周，一般有四个消光位置，四个强度极大位置。
  * 两个偏振片的偏振化方向互相平行：$\mathrm o$光和$\mathrm e$光透过第二块偏振片后振幅$\begin{cases}A\_{2\mathrm e} = A\_{1\mathrm e} \cos \alpha = A\_1 \cos^2\alpha, \\\ A\_{2\mathrm o} = A\_{1\mathrm o} \sin \alpha = A\_1 \sin^2\alpha, \end{cases}$ $\Delta\varphi = \cfrac {2\pi} \lambda (n\_{\mathrm o} - n\_{\mathrm e}) d$。旋转第二块偏振片从$P\_1 \bot P\_2$到$P\_1 \parallel P\_2$，观察到明暗互补。

#### 4.6 人为双折射
* 正常情况下各向同性的透明物质在应力作用下可变为光学上各向异性的。这一现象称为光测弹性或应力双折射。

#### 4.7 旋光性
* 偏振光沿光轴方向通过石英晶体时，其振动面发生旋转，称为旋光现象。