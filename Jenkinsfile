pipeline {
  agent any
  
     stages {
        
        stage('Checkout Source') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Imange') {
            steps {
                   dir('01_source_code/webapp'){
                      sh 'docker build -t webapp:day56 .'
                   }
            }
         }
        stage('Run Container Test') {
            steps {
                  dir('01_source_code/webapp') {               
                   sh 'docker run  --rm webapp:day56'                '''
                  }
            }
         }
   }
}
