(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{393:function(t,e,a){"use strict";a.r(e);var n=a(32),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"extra-patchset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extra-patchset","aria-hidden":"true"}},[t._v("#")]),t._v(" Extra Patchset")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),a("p",[t._v("KernelCare 2.12-5 or higher")])]),a("p",[t._v("KernelCare Extra patchset includes all the security fixes from KernelCare for CentOS 6 & CentOS 7 as well as symlink protection and IPSet bugfix for CentOS 6.")]),t._v(" "),a("p",[t._v("To enable extra patches and apply patch, run:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("kcarectl --set-patch-type extra --update\n")])])]),a("p",[t._v("To enable extra patches without update, run:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("kcarectl --set-patch-type extra\n")])])]),a("p",[t._v("The ‘extra’ patch will be applied on the next automatic update.")]),t._v(" "),a("p",[t._v("To see details, run:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("kcarectl --patch-info\n")])])]),a("p",[t._v("You should see something similar to:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("OS: centos6\nkernel: kernel-2.6.32-696.6.3.el6\ntime: 2017-07-31 22:46:22\nuname: 2.6.32-696.6.3.el6\n \nkpatch-name: 2.6.32/symlink-protection.patch\nkpatch-description: symlink protection // If you see this patch, it mean that you can enable symlink protection.\nkpatch-kernel: kernel-2.6.32-279.2.1.el6\nkpatch-cve: N/A\nkpatch-cvss: N/A\nkpatch-cve-url: N/A\nkpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/\n \nkpatch-name: 2.6.32/symlink-protection.kpatch-1.patch\nkpatch-description: symlink protection (kpatch adaptation)\nkpatch-kernel: kernel-2.6.32-279.2.1.el6\nkpatch-cve: N/A\nkpatch-cvss: N/A\nkpatch-cve-url: N/A\nkpatch-patch-url: https://gerrit.cloudlinux.com/#/c/16508/\n \nkpatch-name: 2.6.32/ipset-fix-list-shrinking.patch\nkpatch-description: fix ipset list shrinking for no reason\nkpatch-kernel: N/A\nkpatch-cve: N/A\nkpatch-cvss: N/A\nkpatch-cve-url: N/A\nkpatch-patch-url: https://bugs.centos.org/view.php?id=13499\n")])])]),a("p",[t._v("To enable Symlink Owner Match Protection, add the following line:")]),t._v(" "),a("p",[a("code",[t._v("fs.enforce_symlinksifowner=1")])]),t._v(" "),a("p",[t._v("to "),a("code",[t._v("/etc/sysconfig/kcare/sysctl.conf")]),t._v(".")]),t._v(" "),a("p",[t._v("And run:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("sysctl -w fs.enforce_symlinksifowner=1\n")])])]),a("p",[t._v("See "),a("a",{attrs:{href:"https://docs.cloudlinux.com/cloudlinux_os_kernel/#symlink-owner-match-protection",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.cloudlinux.com/cloudlinux_os_kernel/#symlink-owner-match-protection"),a("OutboundLink")],1),t._v(" for details.")]),t._v(" "),a("Disqus")],1)},[],!1,null,null,null);e.default=s.exports}}]);