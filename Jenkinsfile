pipeline {
    agent any

    environment {
        NODEJS_HOME = "${tool 'NodeJS12'}"
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
                    sh "${tool 'NodeJS12'}/bin/npm install"
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Run your build command (e.g., npm run build)
                    sh "${tool 'NodeJS12'}/bin/npm run build"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run your test command (e.g., npm test)
                    sh "${tool 'NodeJS12'}/bin/npm test"
                }
            }
        }
    }

    post {
        success {
            echo 'Build and test successful!'

            // Add deployment steps if needed
        }

        failure {
            echo 'Build or test failed. Please check the logs for details.'
        }
    }
}
