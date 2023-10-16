package hepan.page.api.service;


import hepan.page.api.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface StudentService {

    Page<Student> page(String name, String sno, Pageable pageable);
}
