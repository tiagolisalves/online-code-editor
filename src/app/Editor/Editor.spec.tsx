import { create } from 'react-test-renderer'
import React from 'react'
import { Editor } from './Editor'

test('It should get filetree from parent', () => {
    const comp = create(<Editor fileContent={fixture().content} onEdit={() => {}}></Editor>)
    expect(comp.toJSON()).toMatchSnapshot()
})

function fixture() {
    return {
        id: 4,
        name: 'Main.java',
        content:
            '/*\r\n * Copyright 2012 Veezoo, Inc.\r\n *\r\n *    Licensed under the Apache License, Version 2.0 (the "License");\r\n *    you may not use this file except in compliance with the License.\r\n *    You may obtain a copy of the License at\r\n *\r\n *        http://www.apache.org/licenses/LICENSE-2.0\r\n */\r\n\r\npackage com.veezoo.main;\r\n\r\nimport java.io.IOException;\r\nimport java.util.Arrays;\r\nimport java.util.Collections;\r\n\r\nimport javax.annotation.Nullable;\r\nimport javax.inject.Singleton;\r\n\r\nimport org.slf4j.Logger;\r\nimport org.slf4j.LoggerFactory;\r\n\r\n/**\r\n *\r\n * A default implementation of Main server as required by\r\n * {@link MainPropertyFactory}.\r\n *\r\n */\r\n@Singleton\r\npublic class Main implements AbstractMain {\r\n    private static final String TEST = "test";\r\n    private static final Logger logger = LoggerFactory.getLogger(Main.class);\r\n    private static final MainPropertyFactory configInstance = com.veezoo.Main.MainPropertyFactory\r\n            .getInstance();\r\n    private static final int TIME_TO_WAIT_FOR_GREETING = 30000;\r\n\r\n    public static void main(String[] args) {\r\n        // do nothing\r\n    }\r\n\r\n}',
    }
}
