## TCP/IP协议族按照层次划分了哪几层

`TCP/IP`协议族最重要的一点就是分层，TCP/IP协议族按层次分为四层：

应用层、传输层、网络层和数据链路层。

### 每层的介绍

#### 应用层

应用层决定的是向用户提供应用服务时的活动。

在`TCP/IP协议族`中预留了各类通用的应用服务。比如，FTP（文件传输协议）、DNS（域名系统）。HTTP也是在应用层。

#### 传输层

传输层对上层应用层，提供处于网络链接中的两台计算机之间的数据传输。

在传输层有两个性质完全不同的协议： TCP（传输控制协议）、UDP（用户数据报协议）。

#### 网络层

网络层用来处理网络上流通的数据包，数据包是网络传输的最小单位，该层规定了通过怎样的路径到达对方。

与对方计算机直接通过多台计算机或网络设备进行传输时，网络层所起的作用就是在众多的选项内，选择一条传输路径。

#### 数据链路层

用来处理链接网络的硬件部分。包括控制操作系统、硬件的设备驱动、NIC（网络适配器，即网卡），及光纤等物理可见部分（还包括连接器等一切传输媒介）。硬件上的范畴均在链路层的作用范围之内。