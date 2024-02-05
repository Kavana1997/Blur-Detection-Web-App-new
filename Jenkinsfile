pipeline {
    agent any

    environment {
        NODEJS_HOME = "${tool 'NodeJS 14'}" // Specify the Node.js installation tool name
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install project dependencies
                    sh "${tool 'NodeJS 14'}/bin/npm install"
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Run your build process (e.g., npm run build)
                    sh "${tool 'NodeJS 14'}/bin/npm run build"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run your test command (e.g., npm test)
                    sh "${tool 'NodeJS 14'}/bin/npm test"
                }
            }
        }
    }

    post {
        success {
            echo 'Build successful!'

            // Add additional post-build actions if needed
        }

        failure {
            echo 'Build failed. Please check the logs for details.'
        }
    }
}
