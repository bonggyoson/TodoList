package com.project.TodoList.Domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class Member {
    // PK 지정
    @Id
    // 데이터베이스에 따라 자동으로 ID가 지정된다. - 기본 세팅
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

}
