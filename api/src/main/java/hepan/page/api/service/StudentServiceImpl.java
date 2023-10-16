package hepan.page.api.service;

import hepan.page.api.entity.Student;
import hepan.page.api.repository.StudentRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class StudentServiceImpl implements StudentService {
    private StudentRepository studentRepository;
    StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public Page<Student> page(String name, String sno, Pageable pageable) {
        return this.studentRepository.findAllByNameAndSno(name, sno, pageable);
    }
}
