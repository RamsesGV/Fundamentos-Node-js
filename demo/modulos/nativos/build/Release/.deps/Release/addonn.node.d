cmd_Release/addonn.node := ln -f "Release/obj.target/addonn.node" "Release/addonn.node" 2>/dev/null || (rm -rf "Release/addonn.node" && cp -af "Release/obj.target/addonn.node" "Release/addonn.node")
